export class User {
    id!:Number;
    email!:string;
    username!:string;
    firstname!:string;
    lastname!:string;
    password!:string;
    constructor(){}
}

export class Advertise{
    brandname!:string;
    description!:string;
    url!:string
    pai!:Number;
    paiperclick!:Number;
    paisa!:Number;
    paisaperclick!:Number;
    country!:string;
    state!:string;
    district!:string;
    hashtags!:string;
    constructor(){}
}
export class Contactus{
    name!:string; 
    email!:string;
    username!:string;
    userid!:Number;
    mobileNumber!:string;
    issue!:string;
    opendate!:string;
    closedate!:string;
    remarks!:string;
    constructor(){}
}

export class Profile{
    username!:string;
    brandName!:string;
    brandDescription!:string;
    brandTagline!:string;
    website!:string;
    advertiserName!:string;
    mobileNumber!:Number;
    country!:string;
    email!:string;
    brandLocation!:string;
    password!:string;
    brandCategory!:string;
    brandTargetGender!:string;
    brandEstablishedIn!:string;
    brandCompanyEmployeeSize!:string;
    brandHashTags!: string[];
    pinCodes!:number[];
    brandTargetAge!:string;
    followers!:Number;
    ads!:Number;
    youtube!:string;
    facebook!:string;
    instagram!:string;
    twitter!:string;
    pinterest!:string;
}

export class Comments{
    advertisementid!:Number;
    userid!:string;
    adid!:Number;
    comment!:string;
    remark!:string;
    temp1!:string;
}

export class Follower{
    advertiserid!:Number;
    userid!:string;
    following!:boolean;
}

export class Visited{
    advertisementid!:Number;
    userid!:string;
    visited!:boolean;
}

export class Like{
    advertisementid!:Number;
    userid!:string;
    visited!:boolean;
}

export class Block{
    advertiserid!:Number;
    userid!:string;
    Blocked!:boolean;
}

export class Report{
    advertisementid!:Number;
    userid!:string;
    reportedtext!:string;
}

export class Favourite{
    advertisementid!:Number;
    userid!:string;
}