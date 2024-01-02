const workDiv = document.querySelector('.workDiv')
const projects = [
    {
        name: '',
        discription: '',
        screenshots: [],
        url: '',
        github: '',
    },
    {
        name: '',
        discription: '',
        screenshots: [],
        url: '',
        github: '',
    },

]

class Project {
    constructor(name, discription, url, github) {
        this.name = name,
        this.discription = discription,
        this.screenshots = [],
        this.url = url,
        this.github = github,
    }
}