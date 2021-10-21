<template>
    <div>
        <h1 class="title">Why Hire Me</h1>
        <p class="text-center mb-lg-5 mb-md-4 mb-3">Here, I'll be making sure what makes me different from other professionals.</p>

        <b-row>
            <b-col cols="12" lg="10" md="12" class="mx-auto">
                <ul class="pl-0">
                    <b-media tag="li">
                        <h4 class="mb-3 text-primary">About Frontend</h4>
                        <div
                            v-for="item in frontend"
                            :key="item.id"
                        >
                            <h2>{{ item.name }}</h2>
                            <img v-bind='imageMainProps' :src='item.imageSrc' alt="">
                            <h5 class="mb-4">{{ item.description }}</h5>
                        </div>
                    </b-media>
                </ul>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'WhyHireMe',
    data() {
        return {
            frontend: [
                {   
                    id: 0,
                    name: 'Google Based High Performance',
                    imageSrc: require('../assets/img/webvitals.svg'),
                    description: 'I code the front-end by following the rules defined by Google to enhance the user experience on your website.'
                                +'It includes: '
                                + '"Performance" in which '
                                +'I make sure that your webiste is fast and loads within first 3-4 seconds. Yes, its true. '

                                +'"Enhanced Web User Experience" where '
                                +'your website will never have any kind of error messages, deadends or some strange and annoying layout shifts on a webpage.'

                                +' "Perfection in Images", '
                                +'it does not matter the size of picture kept in your website. It'+"'"+'ll have high quality, fastest loading and perfectly aligned images.'
                },
                {
                    id: 1,
                    name: 'Latest Bootstrap',
                    imageSrc: require('../assets/img/bootstrap-5.svg'),
                    description: 'I keep myself updated about the issues related to responsiveness because its important. So, I'+"'"+'ll be embedding latest version of Boostrap in your website by keeping both the optimization and responsiveness in mind.'
                },
                {
                    id: 2,
                    name: 'Clean & Understandable Code',
                    imageSrc: require('../assets/img/css.svg'),
                    description: 'Since I am a professional in coding so, I keep the code clean and easy to understand for each and everyone by using most natural keywords while coding. So, you and your backend developer will never have to worry about explaining things to each other about code.'
                                +'My code is so easy to understand that you can also make changes to your own website all by yourself without hiring any developer in future.'
                }
            ],

            imageMainProps: {
                height: 50,
                class: 'mb-2',
            },
        }
    }
}
</script>