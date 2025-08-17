export function getCourseDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  let hoursFormated = hours.toString();
  let minutesFormated = minutes.toString();
  if (hours < 10) {
    hoursFormated = `0${hours}`;
  }

  if (minutes < 10) {
    minutesFormated = `0${minutes}`;
  }

  return `${hoursFormated}:${minutesFormated}`;
}
