<template>
  <section>
    <form novalidate @submit="updateTodoHandler">
      <v-dialog v-model="dialog" width="300">
        <v-card>
          <v-card-title> Add Todo </v-card-title>

          <v-card-text>
            <v-text-field
              v-model="todo.name"
              label="Name"
              filled
              type="text"
              name="name"
              required
            ></v-text-field>
            <v-textarea
              v-model="todo.description"
              filled
              name="description"
              label="Description"
              required
            ></v-textarea>
            <v-select
              v-model="todo.type"
              filled
              name="type"
              required
              :items="types"
            >
              <!-- <option v-for="type in types" :key="type" :value="type">
                  {{ type }}
                </option> -->
            </v-select>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" text>
              {{ todo.id ? 'Update' : 'Add' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <table>
        <tbody>
          <tr>
            <th align="left">
              <label for="name">Name</label>
            </th>
            <td>
              <input id="name" v-model="todo.name" />
            </td>
            <td>{{ errors.name }}</td>
          </tr>
          <tr>
            <th align="left">
              <label for="description">Description</label>
            </th>
            <td>
              <textarea
                id="description"
                v-model="todo.description"
                name="description"
                required
              ></textarea>
            </td>
            <td>{{ errors.description }}</td>
          </tr>
          <tr>
            <th align="left">
              <label>Type</label>
            </th>
            <td>
              <select id="type" v-model="todo.type" name="type" required>
                <option v-for="type in types" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
            </td>
            <td>{{ errors.type }}</td>
          </tr>
          <tr>
            <th align="left">
              <label>Confidential</label>
            </th>
            <td>
              <label for="confidential1">Yes</label>
              <input
                id="confidential1"
                v-model="todo.Confidential"
                type="radio"
                name="confidential"
                value="Yes"
              />
              <label for="confidential2">No</label>
              <input
                id="confidential2"
                v-model="todo.Confidential"
                type="radio"
                name="confidential"
                value="No"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <th align="left">
              <label>Remind</label>
            </th>
            <td>
              <label for="remind">Yes</label>
              <input
                id="remind"
                v-model="todo.remind"
                type="checkbox"
                name="remind"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <th align="left">
              <label for="date">Date</label>
            </th>
            <td>
              <input
                id="date"
                v-model="todo.date"
                type="date"
                name="date"
                required
              />
            </td>
            <td>{{ errors.date }}</td>
          </tr>
          <tr>
            <th colspan="2" align="right">
              <button type="submit"></button>
            </th>
          </tr>
        </tbody>
      </table> -->
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Todo, TodoErrorStatus, TYPES } from './todos'

@Component
export default class TodoForm extends Vue {
  dialog = true

  @Prop({ type: Object, required: true }) readonly todo!: Partial<Todo>

  types: string[] = TYPES

  errors: TodoErrorStatus = {
    status: false,
  }

  // eslint-disable-next-line
  updateTodoHandler = (event: any) => {
    console.log('here')
    // eslint-disable-next-line
    event.preventDefault()
    this.errors = { status: false }
    if (!this.todo.name) {
      this.errors.name = 'Name is required.'
      this.errors.status = true
    }
    if (!this.todo.description) {
      this.errors.description = 'Description is required.'
      this.errors.status = true
    }
    if (!this.todo.type) {
      this.errors.type = 'Type is required.'
      this.errors.status = true
    }
    if (!this.todo.date) {
      this.errors.date = 'Date is required.'
      this.errors.status = true
    }
    setTimeout(() => {
      if (!this.errors.status) {
        this.$emit('onAddOrUpdate', this.todo)
      } else {
        alert('All Fields are required')
      }
    })
  }
}
</script>
