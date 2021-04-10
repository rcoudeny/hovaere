<template>
	<div class="wrapper">
		<header id="intro">
			<div style="flex: 1">
				<p>
					De firma Hovaere is opgericht in 1999 en is sindsdien een begrip in
					het opkitten van ramen, industriebouw, plinten,&nbsp;…
				</p>
				<button style="width: 150px" @click="$router.push('over ons')">
					Lees meer...
				</button>
			</div>
			<div style="text-align: right; flex: 1">
				<p>+ 1 miljoen LM gekit</p>
				<button @click="$router.push('contact')">Contact</button>
			</div>
		</header>

		<section id="fotos">
			<div class="imagecontainer">
				<router-link to="/ramen en deuren">
					<ImageWidthHeight
						class="image"
						v-bind:image="'mockimg/ramenendeuren.png'"
					></ImageWidthHeight>
					<div class="annotation">Ramen en deuren</div></router-link
				>
			</div>
			<div class="imagecontainer">
				<router-link to="/industriebouw">
					<ImageWidthHeight
						class="image"
						v-bind:image="'mockimg/industriebouw.jpg'"
					></ImageWidthHeight>
					<div class="annotation">Industriebouw</div></router-link
				>
			</div>
			<div class="imagecontainer">
				<router-link to="/vloeren en plinten">
					<ImageWidthHeight
						class="image"
						v-bind:image="'mockimg/vloerenenplinten.jpg'"
					></ImageWidthHeight>
					<div class="annotation">Vloeren en plinten</div></router-link
				>
			</div>
		</section>
		<section id="begrippen">
			<div class="wrapper">
				<div>
					<h2>22</h2>
					<h3>Jaren ervaring</h3>
				</div>
				<div>
					<span>
						<svg
							class="logo"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							></path>
						</svg>
					</span>
					<h3>Belgisch bedrijf</h3>
				</div>
				<div>
					<h2>+30</h2>
					<h3>Kleuren</h3>
				</div>
				<div>
					<h2>+1.000.000 LM</h2>
					<h3>gekit</h3>
				</div>
				<div>
					<h2>22</h2>
					<h3>ATG gekeurd</h3>
				</div>
			</div>
		</section>
		<section id="projecten">
			<h3>Projecten</h3>
			<Slider
				class="slider"
				v-bind:images="[
					'mockimg/foto1.jpg',
					'mockimg/foto2.jpg',
					'mockimg/foto3.jpg',
					'mockimg/foto4.jpg',
					'mockimg/foto5.jpg',
				]"
			></Slider>
		</section>
	</div>
</template>

<script>
import Slider from "@/components/shared/Slider";
import ImageWidthHeight from "@/components/shared/ImageWidthHeight";

export default {
	components: {
		Slider,
		ImageWidthHeight,
	},
};
</script>
<style lang="scss" scoped>
/* Home */
.wrapper {
	align-content: center;
}

/* Header */
#intro {
	display: flex;
	flex-direction: row;
	max-width: 600px;
	margin: 100px auto;
	> div {
		margin: 20px;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 200px;
	}
}

/* Images */
@media (max-width: 900px) {
	#fotos {
		flex-direction: column;
		.imagecontainer {
			.image {
				height: 300px;
			}
		}
	}
}
@media (min-width: 900px) {
	#fotos {
		flex-direction: row;
	}
	.imagecontainer {
		.image {
			height: 200px;
		}
	}
}
#fotos {
	max-width: 900px;
	display: flex;
	margin: 50px auto;

	.imagecontainer {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin: 20px;
		text-align: center;
		transition-duration: 0.4s;
		a {
			text-decoration: none;
			color: black;
		}
		div.annotation {
			margin: 10px;
			font-size: 1.3em;
			text-decoration: none;
		}
	}
	.imagecontainer:hover {
		// margin: 8px;
		// border: 2px solid black;
		box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
	}
}

/* Random info */
#begrippen {
	background-color: black;
	color: white;
	.wrapper {
		max-width: 1200px;

		margin: auto;
		display: flex;
		text-align: center;
		> div {
			padding: 50px 0px 50px 0px;
			flex: 1;
		}
		> :not(:last-child) {
			border-right: 2px solid white;
		}
	}
}

/* Foto slider */
#projecten {
	text-align: center;
	max-width: 1200px;
	margin: auto;
	h3 {
		font-size: 2em;
	}
}

/* General */
.logo {
	height: 50px;
}
</style>
