import {PermissionsAndroid} from 'react-native';

class UserPermissions{

    getCameraPermission = async () =>{
        if(true){
            try{
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,{
                    title: "PicUploader",
                    message: "Camera Permission"
                });

                if(granted === PermissionsAndroid.RESULTS.GRANTED){
                    return true
                } else{
                    return false
                }
            }catch(err){
                console.log(" >> > ERR CAMERA ", err)
                return false
            }
        }
    }
}
export default new UserPermissions();