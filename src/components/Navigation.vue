<template>
    <b-navbar toggleable="lg" type="primary" variant="light" sticky>
        <b-navbar-brand class="text-uppercase" :to="links[0].path">
            Sameer
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="x"></b-icon>
            <b-icon v-else icon="list"></b-icon>
        </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav class="ml-lg-0 ml-auto align-items-center">
                <b-nav-item 
                    v-for="routes in links"
                    :to="routes.path"
                    :key="routes.id"
                    active>
                    Home
                </b-nav-item>
            </b-navbar-nav> -->
            <b-navbar-nav class="ml-auto align-items-center">
                <b-link
                    active-class="active"
                    class="nav-link"
                    v-for="routes in links"
                    :key="routes.id"
                    :to="routes.path"
                >
                    <b-nav-item :to="routes.path">
                        {{ routes.name }}
                    </b-nav-item>
                </b-link>
                <b-nav-item href="#portfolio">
                    <b-button variant="primary" href="#">
                        <b-icon-download class="mr-1" />
                        Download CV
                    </b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            links: [
                {
                    id: 0,
                    name: 'Home',
                    path: '/',
                },
                {
                    id: 1,
                    name: 'Portfolio',
                    path: '/portfolio'
                },
                {
                    id: 2,
                    name: 'Services',
                    path: '/services'
                },
                {
                    id: 3,
                    name: 'Why Hire Me?',
                    path: '/why-hire-me'
                },
            ],
        }
    },
}
</script>

<style scoped>
    .nav-item{
        padding-left: .5rem;
        padding-right: .5rem;
    }
</style>