import { db } from '.'

async function main() {
  const tasks = [
    { name: 'Buy milk' },
    { name: 'Walk the dog', completed: true },
    { name: 'Clean the house' },
  ]

  const taskNames = tasks.map(t => t.name)
  const existingTasks = await db.task.findMany({ where: { name: { in: taskNames } } })

  const existingTaskNames = existingTasks.map(t => t.name)
  const tasksToCreate = tasks.filter(t => !existingTaskNames.includes(t.name))

  if (tasksToCreate.length > 0) {
    await db.task.createMany({ data: tasksToCreate })
  }
}

main()
  .catch((e) => {
    console.error(e)
    // eslint-disable-next-line node/prefer-global/process
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
