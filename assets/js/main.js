const redirectOnClick = (id, url) => {
  document
  .getElementById(id)
  .addEventListener('click', _ => window.location.href = url)
}

redirectOnClick('instagram-icon', 'https://www.instagram.com/gustapinto_')
redirectOnClick('github-icon', 'https://github.com/gustapinto')
redirectOnClick('linkedin-icon', 'https://www.linkedin.com/in/gustavo-henrique-pinto-01326a20b')
redirectOnClick('cassum-link', 'https://www.cassum.dev/')
redirectOnClick('b3-notifier-card', 'https://github.com/gustapinto/b3-notifier')
redirectOnClick('cptec-data-extractor-card', 'https://github.com/gustapinto/cptec-data-extractor')
redirectOnClick('blog-ao-card', 'https://github.com/projeto-ao/blog')
