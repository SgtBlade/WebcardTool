const ROUTES = {
    home: { path: "/", to: "/" },
    flashcards: { to:'/flashcards/', path: '/flashcards/:type'},
    quizz: { to:'/quizz/', path: '/quizz/:type'}

}

export default ROUTES;