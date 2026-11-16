
import http from 'http';
import { execFileSync } from 'child_process';

const server = http.createServer((req, res) => {
    try {
        const output = execFileSync('node', ['url.js'], {
            encoding: 'utf-8'
        });

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(output);
    } catch (error) {
        res.writeHead(500);
        res.end(error.message);
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});
