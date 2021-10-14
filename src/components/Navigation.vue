<template>
    <b-navbar toggleable="lg" type="primary" variant="light" sticky="true">
        <b-navbar-brand href="/">
            Navbar
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="x"></b-icon>
            <b-icon v-else icon="list"></b-icon>
        </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-lg-0 ml-auto align-items-center">
                <b-nav-item href="/" active>
                    Home
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto align-items-center">
                <b-link
                    active-class="active"
                    class="nav-link"
                    v-for="routes in links"
                    :key="routes.id"
                    :to="routes.path"
                >
                    <b-nav-item>
                        {{ routes.name }}
                    </b-nav-item>
                </b-link>
                <b-nav-item href="#portfolio">
                    <b-button variant="primary">
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
                    name: 'Portfolio',
                    path: '/portfolio'
                },
                {
                    id: 1,
                    name: 'Services',
                    path: '/services'
                },
                {
                    id: 2,
                    name: 'Why Hire Me?',
                    path: '/whyMe'
                },
            ]
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