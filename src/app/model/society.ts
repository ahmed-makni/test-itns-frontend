export interface Society {
    nom:String;
    address:String;
    tel1:String;
    tel2:String;
    sector:String;
    activity:String;
    droits:String;
    codePostale:String;
    ville:String;
    notes:String;
    precision:String;
    email:String;
    linkedIn:String;
    _links: {
        self: {
            href: string;
        },
        society: {
            href: string
        },
        propects: {
            href: string;
        }
    }

}
