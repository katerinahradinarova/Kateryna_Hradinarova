import * as dropboxV2Api from "dropbox-v2-api";
import * as fs from "fs";

let dropbox;
const myToken =
  "sl.BWUHrBQCnui1jaWEjD2r7TFU9wXJziTesKMf0tGx6tIBvPBtblKpxGJVDAYz-yfSwJQuNTRIhZEAoqucCoPnAw2pAS6wbZZ1rHpU0TI4fVLCyqmLc_GtiQ8BVmtUQ9Op2FW6W6w";

const directoryName = "help/results";
const fileName = "result1.txt";

describe("Dropbox WebAPI Requests", function () {
  beforeAll(function () {
    dropbox = dropboxV2Api.authenticate({
      token: myToken,
    });
  });

  describe("FileWork", () => {
    //FOLDER CREATION
    it("create_folder", (done) => {
      dropbox(
        {
          resource: "files/create_folder",
          parameters: {
            path: "/" + directoryName,
          },
        },
        (
          error: any,
          result: {
            should: { have: { property: (x: string, y: string) => void } };
          }
        ) => {
          if (error) {
            const errorObj = error as unknown as { error_summary: string };
            const isFolderExist = errorObj.error_summary.includes(
              "path/conflict/folder/."
            );
            if (isFolderExist) {
              done();
              return;
            }
            console.error(error);
            throw error;
          }
          expect(result["path_lower"]).toBe(`/${directoryName}`);
          done();
        }
      );
    });

    //UPLOADING
    it("upload", (done) => {
      dropbox(
        {
          resource: "files/upload",
          parameters: {
            path: "/" + directoryName + "/" + fileName,
          },
          readStream: fs.createReadStream(
            "./" + directoryName + "/" + fileName
          ),
        },
        (
          error: any,
          result: {
            should: { have: { property: (x: string, y: string) => void } };
          }
        ) => {
          if (error) {
            console.error(error);
            throw error;
          }

          expect(result["path_lower"]).toBe(`/${directoryName}/${fileName}`);
          done();
        }
      );
    });

    //GETTING METADATA
    it("get_metadata", (done) => {
      dropbox(
        {
          resource: "files/get_metadata",
          parameters: {
            path: "/" + directoryName,
            include_media_info: false,
            include_deleted: false,
            include_has_explicit_shared_members: false,
          },
        },
        (
          error: any,
          result: {
            should: { have: { property: (x: string, y: string) => void } };
          }
        ) => {
          if (error) {
            console.error(error);
            throw error;
          }

          expect(result["path_lower"]).toBe(`/${directoryName}`);
          done();
        }
      );
    });

    //DELETING
    it("delete", (done) => {
      dropbox(
        {
          resource: "files/delete",
          parameters: {
            path: "/" + directoryName + "/" + fileName,
          },
        },
        (
          error: any,
          result: {
            should: { have: { property: (x: string, y: string) => void } };
          }
        ) => {
          if (error) {
            console.error(error);
            throw error;
          }
          expect(result["path_lower"]).toBe(`/${directoryName}/${fileName}`);
          done();
        }
      );
    });
  });
});
