

# Portfolio

This is my portfolio. It contains a brief presentation about me, my experiences and my skills.  
There are also a list of projects that I have worked on, with links to their repositories.
My portfolio is available at https://mathieu.dzqdzq.net

## Stack of the portfolio
- Vue.js with Nuxt
- Tailwind CSS
- Bun

Feel free to fork this repository and use it as a template for your own portfolio.

## How to run the portfolio
### Use the Docker image
1. Build the Docker image:
```bash
docker build -t portfolio .
```

2. Run the Docker container:
```bash
docker run -d -p 3000:3000 -e WEBHOOK_URL="YOUR_WEBHOOK_URL" portfolio
```

### Run locally
1. Install dependencies:
```bash
bun install
```

2. Create a `.env` file in the root of the project and add your webhook URL:
```
WEBHOOK_URL=YOUR_WEBHOOK_URL
```

3. Run the development server:
```bash
bun run dev
```

## License
This project is licensed under the WTFPL License. See the [LICENSE](LICENSE) file for details.

🐢
