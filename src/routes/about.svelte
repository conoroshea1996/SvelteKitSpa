<script context="module">
	export let ssr = false;
</script>

<script lang="ts">
	import Calendar from '$lib/Calendar/Calendar.svelte';
	import Modal from 'hirehive-ui/src/Modal/Modal.svelte';
	let open = false;
	let modal;
</script>

{#if open}
	<Modal bind:open bind:this={modal}>
		<div slot="header">
			<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
				<!-- Heroicon name: outline/check -->
				<svg
					class="h-6 w-6 text-green-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			</div>
			<h1 class="text-center text-gray-500 text-xl">Modal header Content</h1>
		</div>

		<div slot="content">
			<div class="mt-3 text-center sm:mt-5">
				<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
					Modal Content
				</h3>
				<div class="mt-2">
					<p class="text-sm text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium
						explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus
						facere veritatis.
					</p>
				</div>
			</div>
		</div>

		<div slot="footer">
			<h1 class="text-center text-gray-500 text-xl my-2">Modal footer content</h1>
			<div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
				<button
					on:click={() => modal.handleClose()}
					type="button"
					class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
				>
					Deactivate
				</button>
				<button
					on:click={() => modal.handleClose()}
					type="button"
					class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
				>
					Cancel
				</button>
			</div>
		</div>
	</Modal>
{/if}

<button
	on:click={() => (open = true)}
	type="button"
	class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
	Open Modal
</button>

<Calendar />

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
