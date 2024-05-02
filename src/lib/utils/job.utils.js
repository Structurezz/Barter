import cron from 'node-cron';

// Define the scheduleJobs function
function scheduleJobs(tasks) {
    // Log received tasks for debugging
    console.log('Received tasks:', tasks);

    // Ensure tasks is an array
    if (!Array.isArray(tasks)) {
        throw new Error('Tasks must be provided as an array');
    }

    // Schedule cron jobs for each task
    tasks.forEach((task) => {
        // Validate each task
        if (!task.schedule || !task.taskFunction) {
            throw new Error('Each task must have a schedule and a task function');
        }

        // Schedule the task using cron
        const scheduledTask = cron.schedule(task.schedule, task.taskFunction);

        // Log scheduled task details for debugging
        console.log(`Task scheduled: ${task.schedule}`);

        // Optionally, you can listen for cron job events
        scheduledTask.on('scheduled', () => {
            console.log(`Task scheduled: ${task.schedule}`);
        });

        scheduledTask.on('run', () => {
            console.log(`Task running: ${task.schedule}`);
        });

        scheduledTask.on('destroy', () => {
            console.log(`Task destroyed: ${task.schedule}`);
        });
    });
}

// Export the scheduleJobs function as the default export
export default scheduleJobs;
