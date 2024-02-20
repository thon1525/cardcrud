import * as yup from "yup";
yup.addMethod(yup.mixed, "fileSize", function (maxSize, message) {
  return this.test("fileSize", message, function (value) {
    const { path, createError } = this;

    if (value && value.size > maxSize) {
      return createError({
        path,
        message,
      });
    }
    return true;
  });
});

// this video 
yup.addMethod(yup.mixed, "videoSize", function (maxSize, message) {
  return this.test("videoSize", message, function (value) {
    const { path, createError } = this;

    if (value && value.size > maxSize) {
      return createError({
        path,
        message,
      });
    }
    return true;
  });
});

// end video
const userSchema = yup.object().shape({
  username: yup.string().required().min(3).max(25),
  profile: yup
    .mixed()
    .required("A File is Required")
    .fileSize(1024 * 1024, "File size must be less than 1MB"),
    profilevideo: yup
    .mixed()
    .required("A Video file is required")
    .videoSize(3 * 1024 * 1024, "File size must be less than 3MB"),
});

export { userSchema };
