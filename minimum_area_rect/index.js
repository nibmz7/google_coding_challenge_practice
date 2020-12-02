const minAreaRect = (points) => {
  points.sort((a, b) => {
    const [aX, aY] = a;
    const [bX, bY] = b;
    if (aX === bX) return aY - bY;
    return aX - bX;
  });

  const pointsMap = new Map();

  for (const point of points) {
    const [x, y] = point;
    const yPoints = pointsMap.get(x) || [];
    yPoints.push(y);
    pointsMap.set(x, yPoints);
  }

  let currentArea = Number.MAX_VALUE;
  const visitedPoints = new Map();

  for (const [x1, yPoints] of pointsMap.entries()) {
    for (let i = 0; i < yPoints.length; i++) {
      const y1 = yPoints[i];
      for (let j = i + 1; j < yPoints.length; j++) {
        const y2 = yPoints[j];
        const key = `${y1}, ${y2}`;
        if (visitedPoints.has(key)) {
          const x2 = visitedPoints.get(key);
          const newArea = (x1 - x2) * (y2 - y1);
          currentArea = Math.min(currentArea, newArea);
        }
        visitedPoints.set(key, x1);
      }
    }
  }

  return currentArea < Number.MAX_VALUE ? currentArea : 0;
};

console.log(
  minAreaRect([
    [1, 1],
    [1, 3],
    [3, 3],
    [3, 1],
    [2, 2],
  ])
);

console.log(
  minAreaRect([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [4, 1],
    [4, 3],
  ])
);
