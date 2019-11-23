<template>
  <div>
    <flip-button
      label="Button"
      size="xs"
    ></flip-button>

    <flip-button
      label="Button"
      size="sm"
      variant="secondary"
      rounded="none"
    ></flip-button>

    <flip-button
      label="Button"
      :uppercase-label="true"
      rounded="base"
    ></flip-button>

    <flip-button
      label="Button"
      :uppercase-label="true"
      size="lg"
      font-weight="bold"
      :border-width="4"
      variant="outline"
      rounded="full"
    ></flip-button>

    <flip-button
      label="Button"
      size="xl"
      variant="link"
    ></flip-button>
  </div>
</template>