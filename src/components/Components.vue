<template>
    <div>
        <b-container fluid class="py-5">
            <b-row class="justify-content-center vh-100">
                <b-col md="5">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                    class="text-left mt-3"
                    id="input-group-1"
                    label="Email Address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                    >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter Email"
                        required
                    >
                    </b-form-input>
                    </b-form-group>
                    <b-form-group
                    class="text-left mt-3"
                    id="input-group-2"
                    label="Password:"
                    label-for="input-2"
                    >
                    <b-form-input
                        id="input-2"
                        v-model="form.password"
                        type="password"
                        placeholder="Enter Password"
                        required
                    >
                    </b-form-input>
                    </b-form-group>
                    <div class="d-flex align-items-center justify-content-between">
                    <b-btn variant="outline-primary" type="reset">
                        <b-icon-arrow-left-short />
                        Previous
                    </b-btn>
                    <b-button variant="primary" type="submit">
                        Save and Next
                        <b-icon-arrow-right-short />
                    </b-button>
                    </div>
                </b-form>
                </b-col>
                <b-col cols="5" class="text-left">
                <b-btn variant="success" type="button" v-b-modal.modal-1
                    >Open Modal</b-btn
                >
                <b-modal
                    id="modal-1"
                    title="My Modal"
                    size="lg"
                    no-close-on-backdrop="true"
                    cancel-variant="button"
                    cancel-title="Close"
                    ok-title="Submit"
                >
                    <p>This is a modal text</p>
                </b-modal>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <div class="bg-p-light text-center py-3 rounded">
                    <b-button variant="primary" class="mr-3">
                    Button
                    </b-button>
                    <b-button variant="success" class="mr-3">
                    Button
                    </b-button>
                    <b-button variant="warning">
                    Button
                    </b-button>
                </div>
                <div class="bg-primary text-center py-3 rounded">
                    <b-button variant="secondary" class="mr-3">
                    Button
                    </b-button>
                    <b-button variant="outline-secondary">
                    Button
                    </b-button>
                    <b-button variant="outline-warning">
                    Button
                    </b-button>
                </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Components',
}
</script>