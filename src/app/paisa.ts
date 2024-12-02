export class User {
    id!:Number;
    email!:string;
    username!:string;
    firstname!:string;
    lastname!:string;
    password!:string;
    emailOTP!:string;
    constructor(){}
}

export class Advertise{
    brandname:string='Pai Square ADs';
    description:string='Pai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADsPai Square ADs';
    url:string='https://chatgpt.com/';
    location:string='Ramula Banda ';
    backGroundColor:string='';
    gender!:string;
    pai:Number=2000;
    paiperclick:Number=20;
    paisa!:Number;
    paisaperclick!:Number;
    country!:string;
    state!:string;
    district!:string;
    hashtags!: string;
    status!:string;
    pincodes!:string;
    commenteduser!:Number[];
    visiteduser!:Number[];
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
    userId!:number;
    brandName!:string;
    brandDescription!:string;
    brandTagLine!:string;
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
    followers!:Number[];
    following!:Number[];
    ads!:Number[];
    accountType!:String;
    rating!:number;
    noOfRating!:number;
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

export class Rating{
    advertiser!:Number;
    user!:Number;
    rating!:Number;
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