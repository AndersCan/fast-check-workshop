// Just use native JSON.parse and JSON.stringify :)

// part 2

/**
 * Parse video duration to readable format
 * @param {number} duration_s in seconds
 * @example
 * parseDurationToText(1) // 00:01
 * parseDurationToText(70) // 01:10
 * parseDurationToText(3600) // 01:00:00
 */
export function parseDurationToText(duration_s: number) {
  const isInvalidDuration =
    typeof duration_s !== 'number' ||
    Number.isNaN(duration_s) ||
    duration_s < 0;

  if (isInvalidDuration) {
    return '00:00';
  }

  const hours = Math.floor(duration_s / 3600);
  const minutes = Math.floor((duration_s / 60) % 60);
  const seconds = Math.floor(duration_s % 60);

  return [hours, minutes, seconds]
    .filter((s, index) => {
      const hoursIsZero = s === 0 && index === 0;
      return hoursIsZero === false;
    })
    .map((s) => s.toString())
    .map((s) => s.padStart(2, '0'))
    .join(':');
}
