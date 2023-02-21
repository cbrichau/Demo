import { createServer } from "./config/server";

const app = createServer();

app.listen(process.env.PORT, () => {
	console.log(`Server running on http://localhost:${process.env.PORT}`);
});
