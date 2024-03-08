import supertest from "supertest";
import { createServer } from "../../utils/server";

const app = createServer();

describe("GET users/:id", () => {
  describe("Given the product does not exist", () => {
    it("should return 404", async () => {
      const userId = "75abcef0631a2d7fdf9f3280";

      await supertest(await app)
        .get(`/users/${userId}`)
        .expect(404);
    });
  });
  describe("Given the product does exist", () => {
    it("should return status 200 and the product", async () => {
      const userId = "65abcef0631a2d7fdf9f3280";

      const { body } = await supertest(await app)
        .get(`/users/${userId}`)
        .expect(200);
      expect(body).toEqual({
        _id: "65abcef0631a2d7fdf9f3280",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        userName: "johndoe",
        password: "password123",
        isDeleted: false,
      });
    });
  });
});

describe("POST users/register", () => {
  describe("Given that the user provides correct input", () => {});
  describe("Given that the user provides an incorrect password", () => {
    it("should return status 422 and error", async () => {
      //return to correct the status
      const body = {
        firstName: "Johnicas",
        lastName: "Doeica",
        email: "john.doe@examplutz.com",
        userName: "johndoe12",
        password: "password123",
        isDeleted: false,
      };
      await supertest(await app)
        .post("/users/register")
        .send(body)
        .expect(422);
      /*.end(function (err, res) {
          if (err) throw err;
        });*/
    });
  });
});
