const http = require("http");

const PORT = process.env.PORT || 3000;

const siteData = {
	brand: "Spectrum ERP",
	tagline: "Run inventory, sales, and operations from one command center",
	navigation: ["Features", "Solutions", "Pricing", "Resources"],
	hero: {
		title: "From Spreadsheets To Operational Clarity",
		description:
			"Spectrum unifies purchasing, warehousing, accounting, and field fulfillment so teams ship faster with fewer manual steps.",
		primaryCta: "Book Demo",
		secondaryCta: "View Sandbox"
	},
	stats: [
		{ label: "Order Accuracy", value: "99.2%" },
		{ label: "Faster Close", value: "3.4x" },
		{ label: "Live SKUs", value: "420k" }
	],
	modules: [
		{
			name: "Inventory Intelligence",
			summary:
				"Track lot-level stock movement, auto-replenishment, and dead stock alerts across every location."
		},
		{
			name: "Revenue Operations",
			summary:
				"Quote to cash workflows, account-specific pricing, and margin analytics in one pipeline."
		},
		{
			name: "Procurement Control",
			summary:
				"Approve purchasing with role policies and compare vendor lead times in real time."
		},
		{
			name: "Finance Sync",
			summary:
				"Post journals automatically from operational events and cut month-end reconciliation time."
		}
	],
	workflow: [
		"Capture demand from sales channels",
		"Convert demand into purchasing and pick tasks",
		"Coordinate packing, shipping, and invoicing",
		"Project cash flow from live commitments"
	],
	testimonials: [
		{
			quote:
				"We replaced six tools and finally got one source of truth for inventory and invoicing.",
			author: "Lina Chen",
			role: "COO, Northline Supply"
		},
		{
			quote:
				"Our planners trust the numbers now, so purchase decisions happen in hours, not days.",
			author: "Ramon Alvarado",
			role: "Head of Operations, Voltix Industrial"
		}
	],
	pricing: [
		{ tier: "Core", price: "$149", seats: "Up to 5 users" },
		{ tier: "Scale", price: "$499", seats: "Up to 30 users" },
		{ tier: "Enterprise", price: "Custom", seats: "Unlimited users" }
	],
	footer: {
		contact: "hello@spectrumerp.io",
		phone: "+1 (800) 555-0142",
		region: "US, Canada, UK"
	}
};

function renderPage(data) {
	const navItems = data.navigation
		.map((item) => `<a href="#">${item}</a>`)
		.join("");
	const statItems = data.stats
		.map(
			(stat) =>
				`<article class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></article>`
		)
		.join("");
	const moduleItems = data.modules
		.map(
			(module) =>
				`<article class="card"><h3>${module.name}</h3><p>${module.summary}</p></article>`
		)
		.join("");
	const workflowItems = data.workflow
		.map((step) => `<li>${step}</li>`)
		.join("");
	const testimonialItems = data.testimonials
		.map(
			(item) =>
				`<article class="quote"><p>"${item.quote}"</p><span>${item.author}, ${item.role}</span></article>`
		)
		.join("");
	const pricingItems = data.pricing
		.map(
			(item) =>
				`<article class="price-card"><h3>${item.tier}</h3><strong>${item.price}</strong><p>${item.seats}</p></article>`
		)
		.join("");

	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>${data.brand}</title>
		<style>
			:root {
				--bg: #f4efe6;
				--panel: #fffdfa;
				--ink: #1e2934;
				--muted: #536172;
				--line: #1e2934;
				--accent: #b9491c;
			}

			* {
				box-sizing: border-box;
			}

			body {
				margin: 0;
				font-family: Georgia, "Times New Roman", serif;
				color: var(--ink);
				background:
					radial-gradient(circle at 12% 10%, #ffe0bf 0, transparent 30%),
					radial-gradient(circle at 88% 85%, #ffd5b8 0, transparent 32%),
					var(--bg);
			}

			.site {
				max-width: 1100px;
				margin: 0 auto;
				padding: 1.2rem 1rem 3rem;
			}

			header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 1rem;
				padding: 0.75rem 0;
			}

			nav {
				display: flex;
				gap: 1rem;
				flex-wrap: wrap;
			}

			nav a {
				color: var(--ink);
				text-decoration: none;
				border-bottom: 1px solid transparent;
			}

			nav a:hover {
				border-bottom-color: var(--ink);
			}

			.brand {
				font-size: 1.2rem;
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: 0.05em;
			}

			.hero {
				display: grid;
				grid-template-columns: 1.3fr 1fr;
				gap: 1.5rem;
				margin-top: 1rem;
			}

			.panel {
				background: var(--panel);
				border: 2px solid var(--line);
				padding: 1.5rem;
				box-shadow: 8px 8px 0 var(--line);
			}

			h1 {
				font-size: clamp(2rem, 4vw, 3.4rem);
				line-height: 1.1;
				margin: 0 0 0.8rem;
			}

			p {
				margin: 0;
				line-height: 1.6;
				color: var(--muted);
			}

			.actions {
				display: flex;
				gap: 0.8rem;
				margin-top: 1.2rem;
				flex-wrap: wrap;
			}

			button {
				border: 2px solid var(--line);
				background: #fff;
				color: var(--ink);
				padding: 0.65rem 0.95rem;
				font: inherit;
				cursor: pointer;
			}

			button.primary {
				background: var(--accent);
				color: #fff;
				border-color: var(--accent);
			}

			.stats {
				display: grid;
				grid-template-columns: repeat(3, minmax(0, 1fr));
				gap: 0.8rem;
				margin-top: 1rem;
			}

			.stat {
				display: grid;
				gap: 0.2rem;
				padding: 0.8rem;
				border: 1px solid var(--line);
				background: #fff;
			}

			.stat strong {
				font-size: 1.4rem;
			}

			.grid {
				display: grid;
				grid-template-columns: repeat(2, minmax(0, 1fr));
				gap: 1rem;
				margin-top: 1.4rem;
			}

			.card,
			.quote,
			.price-card {
				border: 1px solid var(--line);
				padding: 1rem;
				background: #fff;
			}

			.card h3,
			.price-card h3 {
				margin: 0 0 0.5rem;
			}

			.section {
				margin-top: 1.4rem;
			}

			.section h2 {
				margin: 0 0 0.8rem;
				font-size: 1.4rem;
			}

			ol {
				margin: 0;
				padding-left: 1.15rem;
			}

			li {
				margin-bottom: 0.5rem;
				color: var(--muted);
			}

			.pricing {
				display: grid;
				grid-template-columns: repeat(3, minmax(0, 1fr));
				gap: 0.9rem;
			}

			.price-card strong {
				display: block;
				font-size: 1.35rem;
				margin-bottom: 0.3rem;
				color: var(--accent);
			}

			.footer {
				margin-top: 2rem;
				padding-top: 1rem;
				border-top: 1px solid var(--line);
				color: var(--muted);
				font-size: 0.95rem;
			}

			.meta {
				margin-top: 1rem;
				font-size: 0.9rem;
				color: var(--muted);
			}

			@media (max-width: 900px) {
				.hero,
				.grid,
				.pricing {
					grid-template-columns: 1fr;
				}

				.stats {
					grid-template-columns: 1fr;
				}

				.pricing {
					grid-template-columns: 1fr;
				}
			}
		</style>
	</head>
	<body>
		<div class="site">
			<header>
				<div class="brand">${data.brand}</div>
				<nav>${navItems}</nav>
			</header>

			<section class="hero">
				<div class="panel">
					<h1>${data.hero.title}</h1>
					<p>${data.hero.description}</p>
					<div class="actions">
						<button class="primary">${data.hero.primaryCta}</button>
						<button>${data.hero.secondaryCta}</button>
					</div>
				</div>
				<div class="panel">
					<p>${data.tagline}</p>
					<div class="stats">${statItems}</div>
				</div>
			</section>

			<section class="section">
				<h2>Platform Modules</h2>
				<div class="grid">${moduleItems}</div>
			</section>

			<section class="section hero">
				<div class="panel">
					<h2>How Teams Use Spectrum</h2>
					<ol>${workflowItems}</ol>
				</div>
				<div class="panel">
					<h2>Customer Stories</h2>
					<div class="grid">${testimonialItems}</div>
				</div>
			</section>

			<section class="section">
				<h2>Pricing</h2>
				<div class="pricing">${pricingItems}</div>
				<p class="meta">Full JSON payload available at <a href="/api/site.json">/api/site.json</a>.</p>
			</section>

			<footer class="footer">
				Contact: ${data.footer.contact} | ${data.footer.phone} | Regions: ${data.footer.region}
			</footer>
		</div>
	</body>
</html>`;
}

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		res.end(renderPage(siteData));
		return;
	}

	if (req.url === "/api/site.json") {
		res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
		res.end(JSON.stringify(siteData, null, 2));
		return;
	}

	if (req.url === "/health") {
		res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
		res.end(JSON.stringify({ ok: true }));
		return;
	}

	res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
	res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
	console.log(`spectrum app is running at http://localhost:${PORT}`);
});
