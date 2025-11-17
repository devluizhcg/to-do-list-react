export function encodeUtils<T>(obj: T): string {
	const json = JSON.stringify(obj); // transforma em string JSON
	return btoa(String.fromCharCode(...new TextEncoder().encode(json)));
}

export function decodeUtils<T>(obj: string): T {
	const json = new TextDecoder().decode(
		Uint8Array.from(atob(obj), (c) => c.charCodeAt(0)),
	);

	return JSON.parse(json) satisfies T;
}
