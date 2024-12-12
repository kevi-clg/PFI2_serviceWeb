import Model from './model.js';
import UserModel from './user.js';
import Repository from './repository.js';

export default class Like extends Model {
    constructor() {
        super(true /* secured Id */);

        this.addField('PostId', 'string');
        this.addField('UserId', 'string');
        
    

        this.setKey("Id");
    }

    bindExtraData(instance) {
        instance = super.bindExtraData(instance);
        let usersRepository = new Repository(new UserModel());
        let ownerUser = usersRepository.get(instance.UserId);
        if (ownerUser) {
            instance.UserName = ownerUser.Name;
        } else {
            instance.UserName = 'unknown';
        }
        return instance;
    }
}
