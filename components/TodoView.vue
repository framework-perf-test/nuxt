<template>
  <section>
    <v-card>
      <v-divider></v-divider>
      <v-card-title>Todo</v-card-title>
      <v-card-text>
        <dl>
          <dt>Name</dt>
          <dd>{{ todo.name }}</dd>
          <dt>Description</dt>
          <dd>{{ todo.description }}</dd>
          <dt>Type</dt>
          <dd>{{ todo.type }}</dd>
          <dt>Confidential</dt>
          <dd>{{ todo.confidential }}</dd>
          <dt>Remind</dt>
          <dd>{{ todo.remind }}</dd>
          <dt>Date</dt>
          <dd>{{ todo.date }}</dd>
        </dl>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="closeTodoHandler"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Todo } from './todos'

@Component
export default class TodoForm extends Vue {
  @Prop({ type: Object, required: true }) readonly todo!: Partial<Todo>

  closeTodoHandler = () => {
    this.$emit('onClose')
  }
}
</script>
