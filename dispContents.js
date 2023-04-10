
    const streamToText = async (blob) => {

      const readableStream = await blob.getReader();

      const chunk = await readableStream.read();



      return new TextDecoder('utf-8').decode(chunk.value);

    };


    const bufferToText = (buffer) => {

      const bufferByteLength = buffer.byteLength;

      const bufferUint8Array = new Uint8Array(buffer, 0, bufferByteLength);


      return new TextDecoder().decode(bufferUint8Array);

    };



    document.getElementById('input').addEventListener('change', function(e) {

      let file = document.getElementById('input').files[0];



      (async () => {

        const fileContent = await file.text();



        // console.log('.text()', fileContent);

        document.getElementById("paragraph").innerText = fileContent;

        /* const fileContentStream = await file.stream();

        console.log('.stream()', await streamToText(fileContentStream));

        const buffer = await file.arrayBuffer();

        console.log('.buffer()', bufferToText(buffer));

        const fileSliceBlob = file.slice(0, file.length);

        const fileSliceBlobStream = await fileSliceBlob.stream();

        console.log('.slice() and .stream()', await streamToText(fileSliceBlobStream)); */

      })();

    });
