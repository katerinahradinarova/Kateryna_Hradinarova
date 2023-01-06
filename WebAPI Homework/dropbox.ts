import dropboxV2Api from 'dropbox-v2-api';
import fs from 'fs';

var dropbox;
var myToken = 'sl.BWUHrBQCnui1jaWEjD2r7TFU9wXJziTesKMf0tGx6tIBvPBtblKpxGJVDAYz-yfSwJQuNTRIhZEAoqucCoPnAw2pAS6wbZZ1rHpU0TI4fVLCyqmLc_GtiQ8BVmtUQ9Op2FW6W6w';

var directoryName = 'results';
var fileName = 'result1.txt';

describe('Dropbox WebAPI Requests', function () {

	beforeAll(function () {
		dropbox = dropboxV2Api.authenticate({
			token: myToken,
		});
	});

	describe('FileWork', () => {

//FOLDER CREATION
		it('create_folder', (done) => {
			dropbox(
        {
				  resource: 'results/create_folder',
				  parameters: 
            {
					    path: '/' + directoryName,
				    }
			  }, 
        (
          error: any, 
          result: { should: { have: { property: (x: string, y: string) => void; }; }; }
        ) => {
			  	if (error) { 
            throw error; 
          }
  
			  	result.should.have.property('name', directoryName);
			  	done();
			  }
      );
		});

//GETTING METADATA
		it('get_metadata', (done) => {
			dropbox(
        {
				  resource: 'results/get_metadata',
				  parameters: 
            {
				  	  path: '/' + directoryName,
				  	  include_media_info: false,
				  	  include_deleted: false,
				  	  include_has_explicit_shared_members: false
				    }
			  }, 
        (
          error: any, 
          result: { should: { have: { property: (x: string, y: string) => void; }; }; }
        ) => {
				  if (error) { 
            throw error; 
          }

				  result.should.have.property('.tag', 'folder');
				  result.should.have.property('path_lower', '/' + directoryName);

				  done();
			  }
      );
		});

//UPLOADING
		it('upload', (done) => {
      dropbox(
        {
          resource: 'results/upload',
          parameters: 
            {
              path: '/' + directoryName + '/' + fileName,
            },
          readStream: fs.createReadStream('/' + directoryName + '/' + fileName)
        }, 
        (
          error: any, 
          result: { should: { have: { property: (x: string, y: string) => void; }; }; }
        ) => {
          if (error) { 
            throw error; 
          }

          result.should.have.property(
            'path_lower',
            '/' + directoryName + '/' + fileName
          );

          done();
        }
      );
    });

//DELETING
		it('delete', (done) => {
			dropbox(
        {
				  resource: 'results/delete',
				  parameters: 
            {
					    'path': '/' + directoryName + '/' + fileName,
				    }
			  }, 
        (
          error: any, 
          result: { should: { have: { property: (x: string, y: string) => void; }; }; }
        ) => {
				if (error) { 
          throw error; 
        }

				result.should.have.property(
          'path_lower',
          '/' + directoryName + '/' + fileName
        );

				done();
			});
		});

	});
});
