import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/JamesStitzel"
    },
    {
      name: "fab fa-linkedin",
      link: "www.linkedin.com/in/dugan-stitzel"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/16770298/james-stitzel"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
