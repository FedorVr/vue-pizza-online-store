<template>
  <div
    :draggable="draggable"
    @dragstart.self="onDragStart"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script setup>
import { DATA_TRANSFER_PAYLOAD } from "@/common/constants";

const props = defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
  dataTransfer: {
    type: Object,
    required: true,
  },
});

// TODO: сделать перетаскивание не только для надписи, но и для картинки
const onDragStart = ({ dataTransfer }) => {
  // console.log('<AppDrag>', props)
  const data = JSON.stringify(props.dataTransfer);
  dataTransfer.setData(DATA_TRANSFER_PAYLOAD, data);
};
</script>
