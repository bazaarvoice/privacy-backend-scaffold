exports.right_of_access = async (req, res) => {
    try {
        console.log("ROA (right of access) request");
        const rao_request = {
            "task_id": "5c394ec5-a193-48c7-a76f-445f17ae7eb2",
            "Errorcode": "No",
            "dataFound": true,
            "comment": "Request submitted for ROA request",
            "collectedId_found": true
        }
        //For async call 202,for synch 201
        res.status(202).json(rao_request);
    } catch (error) {
        res.status(403).json(error);
    }
}

exports.right_of_erase = async (req, res) => {
    try {
        console.log("ROE (right of erase)request");
        const roe_request = {
            "task_id": "5c394ec5-a193-48c7-a76f-445f17ae7eb2",
            "errorcode": "NO",
            "comment": "ROE request submitted successfully"
        }
         //For async call 202,for synch 201
        res.status(202).json(roe_request);
    } catch (error) {
        res.status(403).json(error);
    }
}
