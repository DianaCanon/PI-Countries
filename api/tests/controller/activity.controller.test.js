/* const ActivityServiceMock = <jest.Mock<ActivityService>>ActivityService;
const activityServiceMock = new ActivityServiceMock();
let activityController: ActivityController; */

const { createActivity } = require("../../src/controller/activityController");

describe("Activity Controller Test", () => {
  beforeEach(() => {
    activityController = new ActivityController(activityServiceMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test("Should create an activity successfuly", async () => {
    jest
      .spyOn(activityServiceMock, "findById")
      .mockReturnValueOnce(Promise.resolve(SERVICE_FINDBYID_SUCCESS_RESPONSE));

    const result = await createActivity.createActivity(
      "Balsaje",
      1,
      1,
      "Verano",
      ["COL"]
    );
    const parsedResult = JSON.parse(result.body);
    expect(parsedResult).toEqual(CONTROLLER_FINDBYID_SUCCESS_RESPONSE);
  });
});
