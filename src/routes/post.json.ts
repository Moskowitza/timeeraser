type PostType = {
	status: number
	body: {
		data: string
	}
}

import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<PostType> = () => {
	return {
		status: 200,
			body: {
			data: 'test'
		}
	}
}
