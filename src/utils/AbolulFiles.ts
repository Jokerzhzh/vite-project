/**
 * 格式化文件大小
 * @param size 文件大小
 */
function getSize(size: number) {
  let number = size;
  let unit = "bype";
  if (number >= 1024 ** 3) {
    number = number / 1024 ** 3;
    unit = "G";
  } else if (number >= 1024 ** 2) {
    number = number / 1024 ** 2;
    unit = "M";
  } else if (number >= 1024) {
    number = number / 1024;
    unit = "KB";
  }
  number = Number(number.toFixed(2));
  return +number + unit;
}

/**
 * 获取文件后缀名
 * @param name 文件名
 */
function getType(name: string) {
  const i = name.lastIndexOf(".");
  if (i >= 0) {
    return name.substring(i).toLowerCase();
  }
  return "";
}

/**
 * 获取文件父路径
 */
function getParent(path: string) {
  const i = path.lastIndexOf("/");
  if (i >= 0) {
    return path.substring(0, i).toLowerCase();
  }
  return "--";
}

export default { getSize, getType, getParent };
