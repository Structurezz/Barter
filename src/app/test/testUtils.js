
// testUtils.js
const mockRequest = (reqData) => {
    const req = { ...reqData };
    return req;
};

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

module.exports = { mockRequest, mockResponse };
