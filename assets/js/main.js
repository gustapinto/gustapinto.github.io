const redirectOnClick = (id, url) => {
  document
  .getElementById(id)
  .addEventListener('click', _ => window.location.href = url)
}

redirectOnClick('instagram-icon', 'https://www.instagram.com/gustapinto_')
redirectOnClick('github-icon', 'https://github.com/gustapinto')
redirectOnClick('linkedin-icon', 'https://www.linkedin.com/in/gustavo-henrique-pinto-01326a20b')
redirectOnClick('cassum-link', 'https://www.cassum.dev/')
