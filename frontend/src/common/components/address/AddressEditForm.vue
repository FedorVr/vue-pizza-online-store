<template>
  <form class="address-form address-form--opened sheet" @submit.prevent="save">
    <div class="address-form__header">
      <b>{{ title }}</b>
    </div>

    <div class="address-form__wrapper">
      <div class="address-form__input">
        <label class="input">
          <span>Address name*</span>
          <input
            v-model="name"
            type="text"
            name="addr-name"
            placeholder="Enter the name of the address"
            required
          />
        </label>
      </div>
      <div class="address-form__input address-form__input--size--normal">
        <label class="input">
          <span>Street*</span>
          <input
            v-model="street"
            type="text"
            name="addr-street"
            placeholder="Enter the name of the street"
            required
          />
        </label>
      </div>
      <div class="address-form__input address-form__input--size--small">
        <label class="input">
          <span>House*</span>
          <input
            v-model="building"
            type="text"
            name="addr-house"
            placeholder="Enter the house number"
            required
          />
        </label>
      </div>
      <div class="address-form__input address-form__input--size--small">
        <label class="input">
          <span>Apartment</span>
          <input
            v-model="flat"
            type="text"
            name="addr-apartment"
            placeholder="Enter № of the apartment"
          />
        </label>
      </div>
      <div class="address-form__input">
        <label class="input">
          <span>Comment</span>
          <input
            v-model="comment"
            type="text"
            name="addr-comment"
            placeholder="Enter a comment"
          />
        </label>
      </div>
    </div>

    <div class="address-form__buttons">
      <button
        type="button"
        class="button button--transparent"
        @click="emit('delete')"
      >
        Delete
      </button>
      <button type="submit" class="button">Save</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  address: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["delete", "save"]);

const name = ref(props.address?.name ?? "");
const street = ref(props.address?.street ?? "");
const building = ref(props.address?.building ?? "");
const flat = ref(props.address?.flat ?? "");
const comment = ref(props.address?.comment ?? "");

const save = () => {
  emit("save", {
    name: name.value,
    street: street.value,
    building: building.value,
    flat: flat.value,
    comment: comment.value,
  });
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds.scss";

.address-form__header {
  @include b-s14-h16;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 21px;
  padding: 10px 16px;

  border-bottom: 1px solid rgba($green-500, 0.1);
}

.address-form__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 80%;
  padding: 16px;
}

.address-form__input {
  width: 100%;
  margin-bottom: 16px;

  &--size {
    &--normal {
      width: 60.5%;
    }

    &--small {
      width: 18%;
    }
  }
}

.address-form__buttons {
  display: flex;
  justify-content: flex-end;

  padding: 0 16px;

  button {
    margin-left: 16px;
    padding: 16px 27px;
  }
}
</style>
