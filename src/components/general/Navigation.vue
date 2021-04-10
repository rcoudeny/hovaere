<template>
	<nav id="navbar" class="sticky">
		<div class="wrapper">
			<div id="mobileNav">
				<router-link to="/"
					><img src="../../assets/logo.png" alt=""
				/></router-link>
				<a
					href="javascript:void(0);"
					id="toggleButton"
					v-on:click="toggleNavbar()"
					style="margin-right: 40px"
				>
					<svg
						style="height: 40px; width: 40px"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
			</div>

			<div id="navLinks">
				<div class="dropdown">
					<span class="link dropdownElement" style="cursor: default"
						>Aanbod <span style="font-size: 10px">▼</span>
					</span>
					<div class="dropdown-content">
						<span class="spacer"></span>
						<div class="dropdown-links">
							<router-link class="link" to="/ramen en deuren"
								>Ramen en deuren</router-link
							>
							<router-link class="link" to="/industriebouw"
								>Industriebouw</router-link
							>
							<router-link class="link" to="/vloeren en plinten"
								>Vloeren en plinten</router-link
							>
						</div>
					</div>
				</div>

				<router-link class="link" to="/over ons">Over ons</router-link>
				<router-link class="link" to="/contact">Contact</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	methods: {
		toggleNavbar: function () {
			var navLinks = document.getElementById("navLinks");
			if (navLinks.style.display === "flex") {
				navLinks.style.display = "none";
			} else {
				navLinks.style.display = "flex";
			}
		},
	},
};
</script>
<style lang="scss" scoped>
// 750px max width to add dropdown thingy
nav {
	background-color: white;
	border-bottom: 2px solid var(--color-medium-red);
	padding: 20px;
	#mobileNav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.wrapper {
		margin: auto;
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
	}
}

@media (max-width: 750px) {
	#toggleButton {
		color: black;
		display: block;
	}
	#navLinks {
		margin-top: 10px;
	}
	#navLinks,
	.dropdown-links {
		> * {
			margin: 3px;
			color: black;
			text-decoration: none;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	nav {
		.wrapper {
			flex-direction: column;
		}
		.dropdownElement {
			display: none;
		}
	}
}
@media (min-width: 750px) {
	#toggleButton {
		display: none;
	}
	#navLinks {
		display: block !important; // overrule javascript toggle button
	}
	nav {
		.wrapper {
			align-items: center;
			flex-direction: row;
		}
	}
	.dropdown-content {
		display: none;
		position: absolute;
		transform: translate(-20px);
		min-width: 200px;
		width: 100%;
		z-index: 1;
	}
	.dropdown-links {
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}
	.dropdown:hover .dropdown-content,
	.dropdown:hover .dropdown-links {
		display: flex;
		flex-direction: column;
	}
	.link {
		text-decoration: none;
		color: black;
		font-size: 20px;
		cursor: pointer;

		:hover {
			color: var(--color-dark-redd);
		}
	}
	.spacer {
		background-color: transparent;
		height: 20px;
	}

	.dropdown:hover .dropdown-links > .link {
		padding: 10px;
		background-color: white;
	}

	.dropdown:hover .dropdown-links > .link:hover {
		background-color: rgb(250, 250, 250);
	}

	#navLinks {
		margin-right: 20px;
		> * {
			margin: 0 20px;
		}
	}
	.dropdown {
		position: relative;
		display: inline-block;
	}
}
</style>
