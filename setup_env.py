#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Python虚拟环境初始化脚本
适用于Windows、macOS和Linux操作系统
"""

import os
import sys
import subprocess
import platform
import argparse
from pathlib import Path


def get_python_executable():
    """获取当前Python解释器路径"""
    return sys.executable


def is_venv_exists(venv_path):
    """检查虚拟环境是否已存在"""
    if os.path.isdir(venv_path):
        # 检查虚拟环境的关键目录/文件是否存在
        if platform.system() == "Windows":
            return os.path.exists(os.path.join(venv_path, "Scripts", "python.exe"))
        else:
            return os.path.exists(os.path.join(venv_path, "bin", "python"))
    return False


def create_venv(venv_path, python_executable=None):
    """创建虚拟环境"""
    if python_executable is None:
        python_executable = get_python_executable()
    
    print(f"正在使用 {python_executable} 创建虚拟环境...")
    
    try:
        # 不捕获输出，直接显示安装过程
        subprocess.run(
            [python_executable, "-m", "venv", venv_path],
            check=True,
            universal_newlines=True
        )
        print(f"虚拟环境已成功创建于 {venv_path}")
        return True
    except subprocess.CalledProcessError:
        print(f"创建虚拟环境失败")
        return False


def get_pip_path(venv_path):
    """获取虚拟环境中pip的路径"""
    if platform.system() == "Windows":
        return os.path.join(venv_path, "Scripts", "pip.exe")
    else:
        return os.path.join(venv_path, "bin", "pip")


def install_requirements(venv_path, requirements_file="requirements.txt"):
    """安装依赖包"""
    if not os.path.exists(requirements_file):
        print(f"警告: 依赖文件 {requirements_file} 不存在")
        return False
    
    print(f"正在安装依赖包，请稍候...")
    
    # 获取虚拟环境中的Python解释器路径
    if platform.system() == "Windows":
        python_path = os.path.join(venv_path, "Scripts", "python.exe")
    else:
        python_path = os.path.join(venv_path, "bin", "python")
    
    try:
        # 使用虚拟环境中的Python来运行pip，并显示安装过程
        print("\n更新 pip, setuptools 和 wheel...")
        subprocess.run(
            [python_path, "-m", "pip", "install", "-U", "pip", "setuptools", "wheel"],
            check=True,
            universal_newlines=True
        )
        
        print(f"\n从 {requirements_file} 安装依赖包...")
        subprocess.run(
            [python_path, "-m", "pip", "install", "-r", requirements_file],
            check=True,
            universal_newlines=True
        )
        
        print("\n依赖包安装完成")
        return True
    except subprocess.CalledProcessError:
        print(f"安装依赖包失败")
        return False


def activate_venv_command(venv_path):
    """返回激活虚拟环境的命令（仅供显示）"""
    if platform.system() == "Windows":
        return f"{os.path.join(venv_path, 'Scripts', 'activate.bat')}"
    else:
        return f"source {os.path.join(venv_path, 'bin', 'activate')}"


def main():
    parser = argparse.ArgumentParser(description="Python虚拟环境初始化脚本")
    parser.add_argument("--venv", default="venv", help="虚拟环境目录名称 (默认: venv)")
    parser.add_argument("--requirements", default="requirements.txt", help="依赖文件路径 (默认: requirements.txt)")
    parser.add_argument("--force", action="store_true", help="强制重新创建虚拟环境")
    
    args = parser.parse_args()
    
    # 获取项目根目录（脚本所在目录）
    project_root = os.path.dirname(os.path.abspath(__file__))
    venv_path = os.path.join(project_root, args.venv)
    requirements_file = os.path.join(project_root, args.requirements)
    
    # 检查requirements.txt是否存在
    if not os.path.exists(requirements_file):
        print(f"警告: 依赖文件 {requirements_file} 不存在")
        create_example_requirements = input("是否创建示例依赖文件? (y/n): ").lower()
        if create_example_requirements == 'y':
            with open(requirements_file, 'w', encoding='utf-8') as f:
                f.write("# 项目依赖包\n")
                f.write("# 请在此处列出您的项目依赖\n")
                f.write("# 例如:\n")
                f.write("# flask==2.0.1\n")
                f.write("# requests==2.26.0\n")
            print(f"已创建示例依赖文件: {requirements_file}")
    
    # 检查虚拟环境是否已存在
    if is_venv_exists(venv_path):
        if args.force:
            print(f"正在删除现有虚拟环境: {venv_path}")
            try:
                import shutil
                shutil.rmtree(venv_path)
            except Exception as e:
                print(f"删除虚拟环境失败: {str(e)}")
                return
        else:
            print(f"虚拟环境已存在: {venv_path}")
            reinstall = input("是否重新安装依赖? (y/n): ").lower()
            if reinstall == 'y':
                install_requirements(venv_path, requirements_file)
            print(f"\n要激活虚拟环境，请运行以下命令:")
            print(f"  {activate_venv_command(venv_path)}")
            return
    
    # 创建虚拟环境
    if create_venv(venv_path):
        # 安装依赖
        if os.path.exists(requirements_file):
            install_requirements(venv_path, requirements_file)
        
        print(f"\n虚拟环境设置完成!")
        print(f"要激活虚拟环境，请运行以下命令:")
        print(f"  {activate_venv_command(venv_path)}")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n操作已取消")
    except Exception as e:
        print(f"发生错误: {str(e)}")
