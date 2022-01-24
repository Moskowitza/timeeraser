type PostType = {
	status: number
	body: {
		data: string
	}
}

export async function get (): Promise<PostType> {
	return {
		status: 200,
		body: {
			data: 'test'
		}
	}
}
