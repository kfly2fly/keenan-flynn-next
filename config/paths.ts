const paths = {
    home() {
        return '/'
    },
    about() {
        return '/about'
    },
    projects() {
        return '/projects'
    },
    books() {
        return '/books'
    },
    booksCreate() {
        return `/books/new`
    },
    travel() {
        return '/travel'
    },
    destSlug(slug: string) {
        return `/travel/${slug}`
    },
    destCreate(slug: string) {
        return `/travel/${slug}/posts/new`
    },
    destPost(slug: string, postId: string) {
        return `/travel/${slug}/posts/${postId}`
    }


}

export default paths