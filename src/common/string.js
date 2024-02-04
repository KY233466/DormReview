export default function getDormName(pathname, floor, Content) {
  if (pathname.includes("coho")) {
    let pathArray = pathname.split("/");
    const dormPath = pathArray[pathArray.length - 1];

    if (pathArray.length > 3) {
      return floor.find((f) => f.unit === dormPath).name;
    }
  }

  return Content.title;
}
