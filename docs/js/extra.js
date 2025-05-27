document.addEventListener("DOMContentLoaded", function () {
  // 处理所有外部链接，使其在新窗口打开
  const articleLinks = document.querySelectorAll('.md-content a[href^="http"]');
  articleLinks.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
    // 处理所有复制按钮
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      // 获取要复制的文本
      let textToCopy;
      if (this.getAttribute('data-copy-text')) {
        textToCopy = this.getAttribute('data-copy-text');
      } else if (this.getAttribute('onclick')) {
        // 尝试从onclick属性中提取
        const match = this.getAttribute('onclick').match(/writeText\('(.+?)'\)/);
        if (match && match[1]) {
          textToCopy = match[1];
        }
      }
      
      // 如果没有找到文本，尝试从前一个code元素获取
      if (!textToCopy) {
        const codeElement = this.closest('pre').querySelector('code');
        if (codeElement) {
          textToCopy = codeElement.textContent.trim();
        }
      }
      
      if (!textToCopy) return;
      
      // 复制文本
      if (navigator.clipboard && window.isSecureContext) {
        // 使用现代API
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            showCopySuccess(this);
          })
          .catch(err => {
            console.error('无法复制文本: ', err);
            fallbackCopy(textToCopy, this);
          });
      } else {
        // 降级处理
        fallbackCopy(textToCopy, this);
      }
    });
  });
  
  // 降级复制方法
  function fallbackCopy(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    textarea.select();
    try {
      document.execCommand('copy');
      showCopySuccess(button);
    } catch (err) {
      console.error('执行复制命令失败', err);
    }
    document.body.removeChild(textarea);
  }
  
  // 显示复制成功效果
  function showCopySuccess(button) {
    const originalText = button.textContent;
    const originalClass = button.className;
    
    button.textContent = '已复制!';
    button.classList.add('copy-success');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.className = originalClass;
    }, 2000);
  }
  });
  
  // 增强徽章按钮的可访问性
  document.querySelectorAll('.badge-button').forEach(badge => {
    badge.setAttribute('role', 'button');
    if (!badge.classList.contains('copy-button')) {
      badge.setAttribute('aria-label', badge.textContent.trim());
    }
  });
});
