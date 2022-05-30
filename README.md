![Image](/DELETEME/preview.png)

# CoolFolio

This is my portfolio website that i made with [Vue.js](https://vuejs.org/) & [Tailwinds Css](https://tailwindcss.com/), all the rendered data is fetched from the `/src/builder.js` file. Edit this file to change the contents of the website.

## Themes

- `brew` - Blue
- `royal` - Orange
- `valencia` - Red
- `emerald` - Green
- `amethyst` - Pink

## Installation

```nginx
## Add this to your Nginx Config
server {
    listen 80;
    server_name jubot.site;
    root /var/www/Portfolio/dist;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_log  /var/log/nginx/portfolio-error.log;
    access_log /var/log/nginx/portfolio-access.log;
}
```

```shell
## Open Directory
cd /var/www
## Clone as 'Portfolio'
git clone https://github.com/CoolFolio/CoolFolio.git Portfolio
## Open Directory
cd Portfolio
## Install Modules
npm install
## Build
npm run build
## Press Enter & You're Done
```

## Customization

As said above, you can customize the website with `builder.js` file in the `/src/`. Here is an example of the file.

![Image](/DELETEME/ray.so.png)
