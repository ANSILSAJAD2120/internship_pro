import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="app-root">
			<Nav />
			<main className="main-content">
				<Hero />

				<section id="features" className="section container">
					<h2>Platform features</h2>
					<p className="lead">Modern, fast and accessible components for your product.</p>

					<div className="cards-grid">
						<Card
							title="Fast Performance"
							desc="Optimized bundles, minimal runtime and smooth interactions."
						/>
						<Card
							title="Scalable Design"
							desc="A consistent design system that grows with your product."
						/>
						<Card
							title="Accessible"
							desc="Built with accessibility in mind across devices and inputs."
						/>
					</div>
				</section>

				<Testimonials />

				<Pricing />

				<Contact />
			</main>

			<Footer />
		</div>
	);
}

export default App;
