/*<pre>*/
/*This script is a modified version of Alex benenson's cyrillic translitarator*/

var amhaHash='{"k":"క్","క్a":"క","క్A":"కా","కa":"కా","క్i":"కి","క్I":"కీ","కిi":"కిఇ","కిa":"కీ", "కెe":"కీ","క్u":"కు","క్U":"కూ","కొo":"కూ","కుu":"కూ","క్e":"కె","కi":"కై","క్o":"కొ", "కu":"కౌ","క్@h":"కః","క@h":"కః","క్O":"కో","కోM":"కోం","క్E":"కే","కేM":"కేం","క్R":"కృ", "కృu":"కృ","కృU":"కౄ","క్M":"కం","క్h":"ఖ్","ఖ్a":"ఖ","ఖa":"ఖా","ఖ్A":"ఖా","ఖ్i":"ఖి", "ఖ్I":"ఖీ","ఖిi":"ఖిఇ","ఖిa":"ఖీ","ఖెe":"ఖీ","ఖ్u":"ఖు","ఖ్U":"ఖూ","ఖొo":"ఖూ","ఖుu":"ఖూ","ఖ్e":"ఖె", "ఖi":"ఖై","ఖ్o":"ఖొ","ఖu":"ఖౌ","ఖ్@h":"ఖః","ఖ@h":"ఖః","ఖ్O":"ఖో","ఖోM":"ఖోం","ఖ్E":"ఖే", "ఖేM":"ఖేం","ఖ్R":"ఖృ","ఖృu":"ఖృ","ఖృU":"ఖౄ","ఖ్M":"ఖం","ఖృl":"ఖ్ల్","ఖ్ల్a":"ఖ్ల","ఖ్ల్u":"ఖ్లు", "ఖ్ల్U":"ఖ్లూ","g":"గ్","గ్a":"గ","గa":"గా","గ్A":"గా","గ్i":"గి","గ్I":"గీ","గిi":"గీ","గిa":"గీ","గెe":"గీ", "గ్u":"గు","గ్U":"గూ","గొo":"గూ","గుu":"గూ","గ్e":"గె","గi":"గై","గ్o":"గొ","గu":"గౌ", "గ్@h":"గః","గ@h":"గః","గ్O":"గో","గ్E":"గే","గ్R":"గృ","గృu":"గృ","గృU":"గౄ","గృఓo":"గౄ", "గ్M":"గం","G":"ఘ్","గ్h":"ఘ్","ఘ్a":"ఘ","ఘa":"ఘా","ఘ్A":"ఘా","ఘ్i":"ఘి","ఘ్I":"ఘీ", "ఘిi":"ఘీ","ఘిa":"ఘీ","ఘెe":"ఘీ","ఘ్u":"ఘు","ఘ్U":"ఘూ","ఘొo":"ఘూ","ఘుu":"ఘూ","ఘ్e":"ఘె", "ఘi":"ఘై","ఘ్o":"ఘొ","ఘu":"ఘౌ","ఘ్@h":"ఘః","ఘ@h":"ఘః","ఘ్O":"ఘో","ఘ్E":"ఘే", "ఘ్R":"ఘృ","ఘృu":"ఘృ","ఘృU":"ఘౄ","ఘ్M":"ఘం","ఙ్a":"ఙ","ఙa":"ఙా","ఙ్A":"ఙా","ఙ్i":"ఙి", "ఙ్I":"ఙీ","ఙిi":"ఙీ","ఙిa":"ఙీ","జెe":"ఙీ","ఙ్u":"ఙు","ఙ్U":"ఙూ","ఙొo":"ఙూ","ఙుu":"ఙూ","ఙ్e":"జె","ఙi":"ఙై", "ఙ్o":"ఙొ","ఙu":"ఙౌ","ఙ్@h":"ఙః","ఙ@h":"ఙః","ఙ్O":"ఙో","ఙ్E":"ఙే","ఙ్R":"ఙృ","ఙృu":"ఙృ","ఙృU":"ఙౄ", "ఙృఓo":"ఙౄ","ఙ్M":"ఙం","c":"చ్","చ్a":"చ","చa":"చా","చ్A":"చా","చ్i":"చి","చ్I":"చీ","చిi":"చీ","చిa":"చీ","చెe":"చీ","చ్u":"చు","చ్U":"చూ","చొo":"చూ","చుu":"చూ","చ్e":"చె","చi":"చై","చ్o":"చొ","చu":"చౌ", "చ్@h":"చః","చ@h":"చః","చ్O":"చో","చ్E":"చే","చ్R":"చృ","చృu":"చృ","చృU":"చౄ","చృఓo":"చౄ","చ్M":"చం", "చ్h":"ఛ్","ఛ్h":"ఛ్","ఛ్a":"ఛ","ఛa":"ఛా","ఛ్A":"ఛా","ఛ్i":"ఛి","ఛ్I":"ఛీ","ఛిi":"ఛీ","ఛిa":"ఛీ","ఛెe":"ఛీ", "ఛ్u":"ఛు","ఛ్U":"ఛూ","ఛొo":"ఛూ","ఛుu":"ఛూ","ఛ్e":"ఛె","ఛi":"ఛై","ఛ్o":"ఛొ","ఛu":"ఛౌ","ఛ్@h":"ఛః", "ఛ@h":"ఛః","ఛ్O":"ఛో","ఛ్E":"ఛే","ఛ్R":"ఛృ","ఛృu":"ఛృ","ఛృU":"ఛౄ","ఛృఓo":"ఛౄ","ఛ్M":"ఛం","j":"జ్", "జ్a":"జ","జa":"జా","జ్A":"జా","జ్i":"జి","జ్I":"జీ","జిi":"జీ","జిa":"జీ","జెe":"జీ","జ్u":"జు","జ్U":"జూ", "జొo":"జూ","జుu":"జూ","జ్e":"జె","జi":"జై","జ్o":"జొ","జu":"జౌ","జ్@h":"జః","జ@h":"జః","జ్O":"జో", "జ్E":"జే","జ్R":"జృ","జృu":"జృ","జృU":"జౄ","జృఓo":"జౄ","జ్M":"జం","జ్h":"ఝ్","ఝ్a":"ఝ", "ఝa":"ఝా","ఝ్A":"ఝా","ఝ్i":"ఝి","ఝ్I":"ఝీ","ఝిi":"ఝీ","ఝిa":"ఝీ","ఝెe":"ఝీ","ఝ్u":"ఝు", "ఝ్U":"ఝూ","ఝొo":"ఝూ","ఝుu":"ఝూ","ఝ్e":"ఝె","ఝi":"ఝై","ఝ్o":"ఝొ","ఝu":"ఝౌ", "ఝ్@h":"ఝః","ఝ@h":"ఝః","ఝ్O":"ఝో","ఝ్E":"ఝే","ఝ్R":"ఝృ","ఝృu":"ఝృ","ఝృU":"ఝౄ", "ఝృఓo":"ఝౄ","ఝ్M":"ఝం","z":"ఝ్","Z":"ఝ్","ఞ్a":"ఞ","ఞa":"ఞా","ఞ్A":"ఞా", "ఞ్i":"ఞి","ఞ్I":"ఞీ","ఞిi":"ఞీ","ఞిa":"ఞీ","ఞెe":"ఞీ","ఞ్u":"ఞు","ఞ్U":"ఞూ","ఞొo":"ఞూ","ఞుu":"ఞూ", "ఞ్e":"ఞె","ఞi":"ఞై","ఞ్o":"ఞొ","ఞu":"ఞౌ","ఞ్@h":"ఞః","ఞ@h":"ఞః","ఞ్O":"ఞో","ఞ్E":"ఞే", "ఞ్R":"ఞృ","ఞృu":"ఞృ","ఞృU":"ఞౄ","ఞృఓo":"ఞౄ","ఞ్M":"ఞం","T":"ట్","ట్a":"ట","టa":"టా", "ట్A":"టా","ట్i":"టి","ట్I":"టీ","టిi":"టీ","టిa":"టీ","టెe":"టీ","ట్u":"టు","ట్U":"టూ","టొo":"టూ", "టుu":"టూ","ట్e":"టె","టi":"టై","ట్o":"టొ","టu":"టౌ","ట్@h":"టః","ట@h":"టః","ట్O":"టో", "ట్E":"టే","ట్R":"టృ","టృu":"టృ","టృU":"టౄ","టృఒo":"టౄ","ట్M":"టం","ట్h":"ఠ్","ఠ్a":"ఠ", "ఠa":"ఠా","ఠ్A":"ఠా","ఠ్i":"ఠి","ఠ్I":"ఠీ","ఠిi":"ఠీ","ఠిa":"ఠీ","ఠెe":"ఠీ","ఠ్u":"ఠు","ఠ్U":"ఠూ","ఠొo":"ఠూ", "ఠుu":"ఠూ","ఠ్e":"ఠె","ఠi":"ఠై","ఠ్o":"ఠొ","ఠu":"ఠౌ","ఠ్@h":"ఠః","ఠ@h":"ఠః","ఠ్O":"ఠో","ఠ్E":"ఠే", "ఠ్R":"ఠృ","ఠృu":"ఠృ","ఠృU":"ఠౄ","ఠృఒo":"ఠౄ","ఠ్M":"ఠం","D":"డ్","డ్a":"డ","డa":"డా","డ్A":"డా", "డ్i":"డి","డ్I":"డీ","డిi":"డీ","డిa":"డీ","డెe":"డీ","డ్u":"డు","డ్U":"డూ","డొo":"డూ","డుu":"డూ","డ్e":"డె", "డi":"డై","డ్o":"డొ","డu":"డౌ","డ్@h":"డః","డ@h":"డః","డ్O":"డో","డ్E":"డే","డ్R":"డృ","డృu":"డృ", "డృU":"డౄ","డృఒo":"డౄ","డ్M":"డం","డ్h":"ఢ్","ఢ్a":"ఢ","ఢa":"ఢా","ఢ్A":"ఢా","ఢ్i":"ఢి","ఢ్I":"ఢీ", "ఢిi":"ఢీ","ఢిa":"ఢీ","ఢెe":"ఢీ","ఢ్u":"ఢు","ఢ్U":"ఢూ","ఢొo":"ఢూ","ఢుu":"ఢూ","ఢ్e":"ఢె","ఢi":"ఢై","ఢ్o":"ఢొ", "ఢu":"ఢౌ","ఢ్@h":"ఢః","ఢ@h":"ఢః","ఢ్O":"ఢో","ఢ్E":"ఢే","ఢ్R":"ఢృ","ఢృu":"ఢృ","ఢృU":"ఢౄ","ఢృఒo":"ఢౄ", "ఢ్M":"ఢం","N":"ణ్","ణ్a":"ణ","ణa":"ణా","ణ్A":"ణా","ణ్i":"ణి","ణ్I":"ణీ","ణిi":"ణీ","ణిa":"ణీ","ణెe":"ణీ","ణ్u":"ణు", "ణ్U":"ణూ","ణొo":"ణూ","ణుu":"ణూ","ణ్e":"ణె","ణi":"ణై","ణ్o":"ణొ","ణu":"ణౌ","ణ్@h":"ణః","ణ@h":"ణః", "ణ్O":"ణో","ణ్E":"ణే","ణ్R":"ణృ","ణృu":"ణృ","ణృU":"ణౄ","ణృఓo":"ణౄ","ణ్M":"ణం","t":"త్","త్a":"త", "తa":"తా","త్A":"తా","త్i":"తి","త్I":"తీ","తిi":"తీ","తిa":"తీ","తెe":"తీ","త్u":"తు","త్U":"తూ","తొo":"తూ", "తుu":"తూ","త్e":"తె","తi":"తై","త్o":"తొ","తu":"తౌ","త్@h":"తః","త@h":"తః","త్O":"తో","త్E":"తే", "త్R":"తృ","తృu":"తృ","తృU":"తౄ","తృఓo":"తౄ","త్M":"తం","త్h":"థ్","థ్a":"థ","థa":"థా","థ్A":"థా", "థ్i":"థి","థ్I":"థీ","థిi":"థీ","థిa":"థీ","థెe":"థీ","థ్u":"థు","థ్U":"థూ","థొo":"థూ","థుu":"థూ","థ్e":"థె", "థi":"థై","థ్o":"థొ","థu":"థౌ","థ్@h":"థః","థ@h":"థః","థ్O":"థో","థ్E":"థే","థ్R":"థృ","థృu":"థృ", "థృU":"థౄ","థృఒo":"థౄ","థ్M":"థం","d":"ద్","ద్a":"ద","దa":"దా","ద్A":"దా","ద్i":"ది","ద్I":"దీ", "దిi":"దీ","దిa":"దీ","దెe":"దీ","ద్u":"దు","ద్U":"దూ","దొo":"దూ","దుu":"దూ","ద్e":"దె","దi":"దై","ద్o":"దొ", "దu":"దౌ","ద్@h":"దః","ద@h":"దః","ద్O":"దో","ద్E":"దే","ద్R":"దృ","దృu":"దృ","దృU":"దౄ","దృఒo":"దౄ", "ద్M":"దం","ద్h":"ధ్","ధ్a":"ధ","ధa":"ధా","ధ్A":"ధా","ధ్i":"ధి","ధ్I":"ధీ","ధిi":"ధీ","ధిa":"ధీ","ధెe":"ధీ","ధ్u":"ధు", "ధ్U":"ధూ","ధొo":"ధూ","ధుu":"ధూ","ధ్e":"ధె","ధi":"ధై","ధ్o":"ధొ","ధu":"ధౌ","ధ్@h":"ధః","ధ@h":"ధః", "ధ్O":"ధో","ధ్E":"ధే","ధ్R":"ధృ","ధృu":"ధృ","ధృU":"ధౄ","ధృఒo":"ధౄ","ధ్M":"ధం","n":"న్","న్a":"న", "నa":"నా","న్A":"నా","న్i":"ని","న్I":"నీ","నిi":"నీ","నిa":"నీ","నెe":"నీ","న్u":"ను","న్U":"నూ","నొo":"నూ", "నుu":"నూ","న్e":"నె","నi":"నై","న్o":"నొ","నu":"నౌ","న్@h":"నః","న@h":"నః","న్O":"నో","న్E":"నే", "న్R":"నృ","నృu":"నృ","నృU":"నౄ","నృఒo":"నౄ","న్M":"నం","p":"ప్","ప్a":"ప","పa":"పా","ప్A":"పా", "ప్i":"పి","ప్I":"పీ","పిi":"పీ","పిa":"పీ","పెe":"పీ","ప్u":"పు","ప్U":"పూ","పొo":"పూ","పుu":"పూ","ప్e":"పె", "పi":"పై","ప్o":"పొ","పu":"పౌ","ప్@h":"పః","ప@h":"పః","ప్O":"పో","ప్E":"పే","ప్R":"పృ","పృu":"పృ", "పృU":"పౄ","పృఒo":"పౄ","ప్M":"పం","P":"ప్","ప్h":"ఫ్","ఫ్a":"ఫ","ఫa":"ఫా","ఫ్A":"ఫా","ఫ్i":"ఫి", "ఫ్I":"ఫీ","ఫిi":"ఫీ","ఫిa":"ఫీ","ఫెe":"ఫీ","ఫ్u":"ఫు","ఫ్U":"ఫూ","ఫొo":"ఫూ","ఫుu":"ఫూ","ఫ్e":"ఫె","ఫi":"ఫై", "ఫ్o":"ఫొ","ఫu":"ఫౌ","ఫ్@h":"ఫః","ఫ@h":"ఫః","ఫ్O":"ఫో","ఫ్E":"ఫే","ఫ్R":"ఫృ","ఫృu":"ఫృ","ఫృU":"ఫౄ", "ఫృఒo":"ఫౄ","ఫ్M":"ఫం","ప్h":"ఫ్","f":"ఫ్","F":"ఫ్","b":"బ్","బ్a":"బ","బa":"బా","బ్A":"బా","బ్i":"బి", "బ్I":"బీ","బిi":"బీ","బిa":"బీ","బెe":"బీ","బ్u":"బు","బ్U":"బూ","బొo":"బూ","బుu":"బూ","బ్e":"బె","బi":"బై", "బ్o":"బొ","బu":"బౌ","బ్@h":"బః","బ@h":"బః","బ్O":"బో","బ్E":"బే","బ్R":"బృ","బృu":"బృ","బృU":"బౄ", "బృఒo":"బౄ","బ్M":"బం","B":"బ్","బ్h":"భ్","భ్a":"భ","భa":"భా","భ్A":"భా","భ్i":"భి","భ్I":"భీ", "భిi":"భీ","భిa":"భీ","భెe":"భీ","భ్u":"భు","భ్U":"భూ","భొo":"భూ","భుu":"భూ","భ్e":"భె","భi":"భై","భ్o":"భొ", "భu":"భౌ","భ్@h":"భః","భ@h":"భః","భ్O":"భో","భ్E":"భే","భ్R":"భృ","భృu":"భృ","భృU":"భౄ","భృఒo":"భౄ", "భ్M":"భం","భ్":"భ్","m":"మ్","మ్a":"మ","మa":"మా","మ్A":"మా","మ్i":"మి","మ్I":"మీ","మిi":"మీ","మిa":"మీ", "మెe":"మీ","మ్u":"ము","మ్U":"మూ","మొo":"మూ","ముu":"మూ","మ్e":"మె","మi":"మై","మ్o":"మొ", "మu":"మౌ","మ్@h":"మః","మ@h":"మః","మ్O":"మో","మ్E":"మే","మ్R":"మృ","మృu":"మృ","మృU":"మౄ", "మృఒo":"మౄ","మ్M":"మం","y":"య్","య్a":"య","యa":"యా","య్A":"యా","య్i":"యి","య్I":"యీ", "యిi":"యీ","యిa":"యీ","యెe":"యీ","య్u":"యు","య్U":"యూ","యొo":"యూ","యుu":"యూ","య్e":"యె","యi":"యై", "య్o":"యొ","యu":"యౌ","య్@h":"యః","య@h":"యః","య్O":"యో","య్E":"యే","య్R":"యృ","యృu":"యృ", "యృU":"యౄ","యృఒo":"యౄ","య్M":"యం","r":"ర్","ర్a":"ర","ర్^":"ర\u0C4D\u200C","రa":"రా","ర్A":"రా","ర్i":"రి","ర్I":"రీ", "రిi":"రీ","రిa":"రీ","రెe":"రీ","ర్u":"రు","ర్U":"రూ","రొo":"రూ","రుu":"రూ","ర్e":"రె","రi":"రై","ర్o":"రొ","రu":"రౌ", "ర్@h":"రః","ర@h":"రః","ర్O":"రో","ర్E":"రే","ర్M":"రం","ర్R":"రృ","రృu":"రృ","రృU":"రౄ","రృఓo":"రౄ","l":"ల్", "ల్a":"ల","లa":"లా","ల్A":"లా","ల్i":"లి","ల్I":"లీ","లిi":"లీ","లిa":"లీ","లెe":"లీ","ల్u":"లు","ల్U":"లూ","లొo":"లూ", "లుu":"లూ","ల్e":"లె","లi":"లై","ల్o":"లొ","లu":"లౌ","ల్@h":"లః","ల@h":"లః","ల్O":"లో","ల్E":"లే","ల్R":"లృ", "లృu":"లృ","లృU":"లౄ","లృఓo":"లౄ","ల్M":"లం","v":"వ్","వ్a":"వ","వa":"వా","వ్A":"వా","వ్i":"వి","వ్I":"వీ", "విi":"వీ","విa":"వీ","వెe":"వీ","వ్u":"వు","వ్U":"వూ","వొo":"వూ","వుu":"వూ","వ్e":"వె","వi":"వై","వ్o":"వొ","వu":"వౌ", "వ్@h":"వః","వ@h":"వః","వ్O":"వో","వ్E":"వే","వ్R":"వృ","వృu":"వృ","వృU":"వౄ","వృఓo":"వృU","వ్M":"వం","V":"వ్", "w":"వ్","W":"వ్","S":"శ్","శ్a":"శ","శa":"శా","శ్A":"శా","శ్i":"శి","శ్I":"శీ","శిi":"శీ","శిa":"శీ","శెe":"శీ","శ్u":"శు", "శ్U":"శూ","శొo":"శూ","శుu":"శూ","శ్e":"శె","శi":"శై","శ్o":"శొ","శu":"శౌ","శ్@h":"శః","శ@h":"శః","శ్O":"శో", "శ్E":"శే","శ్R":"శృ","శృu":"శృ","శృU":"శరౄ","శృఒo":"శరౄ","శ్M":"శం","స్h":"ష్","ష్a":"ష","షa":"షా","ష్A":"షా", "ష్i":"షి","ష్I":"షీ","షిi":"షీ","షిa":"షీ","షెe":"షీ","ష్u":"షు","ష్U":"షూ","షొo":"షూ","షుu":"షూ","ష్e":"షె","షi":"షై", "ష్o":"షొ","షu":"షౌ","ష్@h":"షః","ష@h":"షః","ష్O":"షో","ష్E":"షే","ష్R":"షృ","షృu":"షృ","షృU":"షౄ","షృఒo":"షౄ", "ష్M":"షం","ష్h":"శ్","s":"స్","స్a":"స","సa":"సా","స్A":"సా","స్i":"సి","స్I":"సీ","సిi":"సీ","సిa":"సీ","సెe":"సీ", "స్u":"సు","స్U":"సూ","సొo":"సూ","సుu":"సూ","స్e":"సె","సi":"సై","స్o":"సొ","సu":"సౌ","స్@h":"సః", "స@h":"సః","స్O":"సో","స్E":"సే","స్R":"సృ","సృu":"సృ","సృU":"సౄ","సృఒo":"సౄ","స్M":"సం","h":"హ్", "హ్a":"హ","హa":"హా","హ్A":"హా","హ్i":"హి","హ్I":"హీ","హిi":"హీ","హిa":"హీ","హెe":"హీ","హ్u":"హు","హ్U":"హూ", "హొo":"హూ","హుu":"హూ","హ్e":"హె","హi":"హై","హ్o":"హొ","హu":"హౌ","హ్@h":"హః","హ@h":"హః","హ్O":"హో", "హ్E":"హే","హ్R":"హృ","హృu":"హృ","హృU":"హౄ","హృఒo":"హౄ","హ్M":"హం","L":"ళ్","ళ్a":"ళ","ళa":"ళా", "ళ్A":"ళా","ళ్i":"ళి","ళ్I":"ళీ","ళిi":"ళీ","ళిa":"ళీ","ళెe":"ళీ","ళ్u":"ళు","ళ్U":"ళూ","ళొo":"ళూ","ళుu":"ళూ","ళ్e":"ళె", "ళi":"ళై","ళ్o":"ళొ","ళu":"ళౌ","ళ్@h":"ళః","ళ@h":"ళః","ళ్O":"ళో","ళ్E":"ళే","ళ్R":"ళృ","ళృu":"ళృ","ళృU":"ళౄ", "ళృఒo":"ళౄ","ళ్M":"ళం","x":"క్ష్","క్ష్a":"క్ష","క్షa":"క్షా","క్ష్A":"క్షా","క్ష్i":"క్షి","క్ష్I":"క్షీ","క్షిi":"క్షీ","క్షిa":"క్షీ","క్షెe":"క్షీ", "క్ష్u":"క్షు","క్ష్U":"క్షూ","క్షొo":"క్షూ","క్షుu":"క్షూ","క్ష్e":"క్షె","క్షi":"క్షై","క్ష్o":"క్షొ","క్షu":"క్షౌ","క్ష్@h":"క్షః","క్ష@h":"క్షః", "క్ష్O":"క్షో","క్ష్E":"క్షే","క్ష్R":"క్షృ","క్షృu":"క్షృ","క్షృU":"క్షౄ","క్షృఒo":"క్షౄ","క్ష్M":"క్షం","X":"క్ష్","జ్n":"జ్ఞ్","జ్ఞ్a":"జ్ఞ", "జ్ఞa":"జ్ఞా","జ్ఞ్A":"జ్ఞా","జ్ఞ్i":"జ్ఞి","జ్ఞ్I":"జ్ఞీ","జ్ఞిi":"జ్ఞీ","జ్ఞిa":"జ్ఞీ","జ్ఞెe":"జ్ఞీ","జ్ఞ్u":"జ్ఞు","జ్ఞ్U":"జ్ఞూ","జ్ఞొo":"జ్ఞూ","జ్ఞుu":"జ్ఞూ", "జ్ఞ్e":"జ్ఞె","జ్ఞi":"జ్ఞై","జ్ఞ్o":"జ్ఞొ","జ్ఞu":"జ్ఞౌ","జ్ఞ్@h":"జ్ఞః","జ్ఞ@h":"జ్ఞః","జ్ఞ్O":"జ్ఞో","జ్ఞ్E":"జ్ఞే","జ్ఞ్R":"జ్ఞృ","జ్ఞృu":"జ్ఞృ", "జ్ఞృU":"జ్ఞౄ","జ్ఞ్M":"జ్ఞం","a":"అ","అa":"ఆ","A":"ఆ","i":"ఇ","I":"ఈ","ఇa":"ఈ","ఇi":"ఈ","ఎe":"ఈ","u":"ఉ", "uఉ":"ఊ","ఉa":"ఊ","U":"ఊ","ఒo":"ఊ","e":"ఎ","E":"ఏ","ఎa":"ఏ","అe":"ఏ","అi":"ఐ","o":"ఒ","O":"ఓ", "ఒe":"ఓ","ఒa":"ఓ","అu":"ఔ","ఒu":"ఔ","M":"ం","్్":"\u0C4D","^":"\u0C4D\u200C","్^":"\u0C4D\u200C","\u200C^":"\u200C","&":"\u200D","~":"़","़़":"~~","़~":"~~","~~़":"~~~","़l":"ఌ","़L":"ౡ","़c":"\u0C58","़j":"\u0C59", "़r":"ఱ్","ఱ్a":"ఱ","ఱ్A":"ఱా","ఱa":"ఱా","ఱ్i":"ఱి","ఱ్I":"ఱీ","ఱi":"ఱీ","ఱa":"ఱీ","ఱెe":"ఱీ","ఱ్u":"ఱు","ఱ్U":"ఱూ", "ఱu":"ఱూ","ఱొo":"ఱూ","ఱ్e":"ఱె","ఱ్E":"ఱే","ఱెi":"ఱై","ఱ్o":"ఱొ","ఱ్O":"ఱో","ఱu":"ఱౌ","ఱ్M":"ఱం","ఱ్@h":"ఱః","ఱ@h":"ఱః","ఱ్R":"ఱృ","ఱృu":"ఱృ","ఱృU":"ఱౄ","ఱృఒo":"ఱౄ","़n":"ఞ్","़m":"ఙ","ఆU":"ఔ","R":"ఋ","ఋu":"ఋ","ఋU":"ౠ","J":"ఝ్","K":"ఖ్","C":"ఛ్","H":"హ","Y":"య","@":"॰","॰M":"ఁ","॰h":"ః","॰n":"్","q":"","Q":""}';

// for compatibility with bookmarklets
function cyr_translit(src) {
	return to_cyrillic(src);
}

var conversionHash = undefined;
var maxcyrlength = 0;

function getConversionHash() {
	if (conversionHash == undefined) {
		conversionHash = eval("("+amhaHash+")");
		 maxcyrlength=6;
	}

	return conversionHash;
}


function to_cyrillic(src, output, chunks) {
	if (src == undefined || src == "" || src == null)
		return src;
	if (output == undefined)
		output = new String();

	var hash = getConversionHash();
	
	var location = 0;
	
	while (location < src.length) {
		var len = Math.min(maxcyrlength, src.length - location);
		var arr = undefined;
		var sub;
		while (len > 0) {
			sub = src.substr(location, len);
			arr = hash[sub];
			if (arr != undefined) 
				break;
			else 
				len--;
		}
		
		// need this for translit on the fly
		if (chunks != undefined)
			chunks[chunks.length] = sub;
			
		if (arr == undefined) {
			output += sub;
			location ++;
		}
		else {

			// case analysis
			var newChar = arr;
			
			if (sub.toLowerCase() == sub.toUpperCase() && arr.length > 1 && arr[1] && (newChar.toUpperCase() != newChar.toLowerCase())) {
			
				// need translit hash to determine if previous character (and possibly the one before it) 
				// were converted and are in upper case
				
				// set prevDud to true previous is not a translated character or simply a blank
				// set prevCap to true if previous was translated and was upper case

				var prevCh = output.length == 0 ? null : output.substr(output.length - 1, 1);
				var prevDud = !prevCh || !getTranslitString(prevCh);
				var prevCap = (!prevDud && prevCh == prevCh.toUpperCase());

				// sub is caseless but result isn't. case will depend on lookbehind and lookahead
				if (prevDud || !prevCap) {
					output += newChar.toLowerCase();
					prevCap = false;
				}
				else {
					var next = " ";
					if (location + len < src.length)
						next = src.substr(location + len, 1);

					if (next != next.toUpperCase() && next == next.toLowerCase() ) {
						//next is lowercase (and not caseless)
						output += newChar.toLowerCase();
					}
					else if (next == next.toUpperCase() && next != next.toLowerCase() ) {
						// next is uppercase (and not caseless)
						output += newChar.toUpperCase();
					}
					else {
						// next is caseless. output case determined by the case of output[length - 2]
						var pprevCh = output.length == 1 ? null : output.substr(output.length - 2, 1);
						var pprevDud = !pprevCh || !getTranslitString(pprevCh);
						if (!pprevDud && (pprevCh == pprevCh.toUpperCase())) {
							//pre-prev is in upper case. output is also uppercase
							output += newChar.toUpperCase();
						}
						else {
						    output += newChar.toLowerCase();
						}
						
					}
				}
					
			}
			else if ((sub.toLowerCase() == sub.toUpperCase()) && (arr.length < 2 || !arr[1])) {
				
				// literal treatment of newChar
				output += newChar;

			}
			else if (sub != sub.toLowerCase()) {
			
				// sub not all-lowercase
				output += newChar.toUpperCase();
			}
			else {
					
					
					
				// sub is lowercase
			    output += newChar.toLowerCase();
			}
			location += len;
		}
	}
	
	return output;
}


function convertIt(src,converter){
 var resultbuffer=""; 
	for(var i=0;i<src.length;i++){
	resultbuffer=converter(resultbuffer+src[i]);
	}
        return converter(resultbuffer);

}

var translitHash = undefined;

function initTranslit() {
	if (translitHash == undefined) {
		translitHash = new Array();

		for (var i = 0; i < conversionHash.length; i++) {
			var ch = conversionHash[i][1];
			// if the translit string is not caseless, convert cyr string to upper case
			// otherwise maintain its case
			if (conversionHash[i][0].toUpperCase() != conversionHash[i][0].toLowerCase())
				ch = ch.toUpperCase();
				
			if (translitHash[ch] == undefined)
				translitHash[ch] = conversionHash[i][0];
		}
	}
}


//-- translit on-the-fly -- 

function replaceValue(node, value, stepback) {
	if (stepback == undefined)
		stepback = 0;
		
	if (isExplorer()) {
		var range = document.selection.createRange();
		range.moveStart("character", -stepback);
		range.text = value;
		range.collapse(false);
		range.select();
	}
	else {
		var scrollTop = node.scrollTop;
		var cursorLoc =  node.selectionStart;
		node.value = node.value.substring(0, node.selectionStart - stepback) + value + 
                node.value.substring(node.selectionEnd, node.value.length);
		node.scrollTop = scrollTop;
		node.selectionStart = cursorLoc + value.length - stepback;
		node.selectionEnd = cursorLoc + value.length - stepback;
	}
}


// compare positions
function positionIsEqual(other) {
	if (isExplorer())
		return this.position.isEqual(other.position);
	else
		return this.position == other.position;
  
}

function Position(node) {
  if (node.selectionStart != undefined)
	this.position = node.selectionStart;
  else if (document.selection && document.selection.createRange())
    this.position = document.selection.createRange();
    
  this.isEqual = positionIsEqual;
}

function resetState() {
	this.position = new Position(this.node);
	this.transBuffer = "";
	this.cyrBuffer = "";
}

function StateObject(node) {
	this.node = node;
	this.reset = resetState;
	this.cyrBuffer = "";
	this.transBuffer = "";
	this.position = new Position(node);
}


var stateHash = new Array();

function isExplorer() {
  return (document.selection != undefined && document.selection.createRange().isEqual != undefined);
}

function pressedKey(event) {
  if (isExplorer())
	return event.keyCode;
  else
    return event.which;
}

function translitonkey(event) {
     /*
	if ((event.keyCode == 255 && event.charCode > 0) || event.keyCode == 8) {
		return;
	}
    */
    
    if (event == undefined)
		event = window.event;
    
	var node = null;
	if (event.target)
		node = event.target;
	else if (event.srcElement)
		node = event.srcElement;
		
	
	
	// initialize state
	var state = stateHash[node];
	if (state == null) {
		state = new StateObject(node);
		stateHash[node] = state;
	}
	if ( (pressedKey(event) > 20) && !event.ctrlKey && !event.altKey && !event.metaKey) {

		var c = String.fromCharCode(pressedKey(event));

		// process input
		var result = process_translit(state, c);
		// finish up
		if (c != result.out || result.replace != 0) {
		  if (isExplorer())
			event.returnValue = false;
		  else
		    event.preventDefault();
		  
		  replaceValue(node, result.out, result.replace);
		  
		  state.position = new Position(node);

		}
	}
	
}

function TranslitResult() {
	this.out = "";
	this.replace = 0;
}

function process_translit(state, c) {
	// reset state if position changed
	if (!state.position.isEqual(new Position(state.node)))
		state.reset();
		
	var result = new TranslitResult();
	
	// initial backbuffer. Add to it as characters are converted
	var backbuffer = getBackBuffer(state.node, state.cyrBuffer.length, 2);
	var chunks = new Array();
	
	state.transBuffer = state.transBuffer+ c

	var str = to_cyrillic(state.cyrBuffer+c, backbuffer, chunks);

	// remove backbuffer from output
	str = str.substr(backbuffer.length);
	result.out = str; 
	/* str is now left alone - it has the output matching contents of chunks and 
	   will be used to reinitialize backbuffers, along with chunks and state.transBuffer
	*/
	
	// get the difference between state.cyrBuffer and output
	for (var i = 0; i < Math.min(state.cyrBuffer.length, result.out.length); i++) {
		if (state.cyrBuffer.substr(i, 1) != result.out.substr(i, 1)) {
			result.replace = state.cyrBuffer.length - i;
			result.out = result.out.substr(i);
			break;
		}
	}
	if (result.replace == 0) {
               if(result.out.length<state.cyrBuffer.length)
				result.replace=state.cyrBuffer.length- result.out.length;
		result.out = result.out.substr(Math.min(state.cyrBuffer.length, result.out.length));
                 
                       //    result.out+="\u0008"
                         
	}
	
	// update state: backbuffer, bufferArray
	if (chunks.length > 0 && chunks[chunks.length - 1] == result.out.substr(result.out.length - 1)) {
		// no convertion took place, reset state
		state.reset();
	}
	else {
		while (state.transBuffer.length > maxcyrlength) {
			state.transBuffer = state.transBuffer.substr(chunks[0].length);
			chunks.shift();
			str = str.substr(1);
		}
		state.cyrBuffer = str;
	}
	return result;
}

function getBackBuffer(node, offset, count) {
		
	if (isExplorer()) { //.tagName.toUpperCase() == "EDITOR") {
	
		var range = document.selection.createRange();
		range.moveStart("character", -offset);
		var result = range.text.substr(-count);
		if (!result)
			result = "";
			
		return result;

	} else {
		return node.value.substring(0, node.selectionStart - offset).substr(-count);
	}
}

// need this for bookmarklets
function getSelectedNode() {
  if (document.activeElement)
	return document.activeElement;
  else
    if (window.getSelection && window.getSelection() && window.getSelection().rangeCount > 0) {
		var range = window.getSelection().getRangeAt(0);
		if (range.startContainer && range.startContainer.childNodes && range.startContainer.childNodes.length > range.startOffset)
			return range.startContainer.childNodes[range.startOffset]
    }
  return null;
}

function toggleCyrMode() {
	var node = getSelectedNode();
	if (node) {
		if (stateHash[node]) {
			if (removeKeyEventListener(node))
				delete stateHash[node];
		}
		else {
			if (addKeyEventListener(node))
				stateHash[node] = new StateObject(node);
		}
	}
}

function addKeyEventListener(node) {
	if (node.addEventListener)
		node.addEventListener("keypress", translitonkey, false);
	else if (node.attachEvent)
	    node.attachEvent("onkeypress", translitonkey);
	else return false;
	return true;
}
function removeKeyEventListener(node) {
	if (node.removeEventListener)
		node.removeEventListener("keypress", translitonkey, false);
	else if (node.detachEvent)
		node.detachEvent("onkeypress", translitonkey);
	else return false;
	return true;
}

function getSelectedText() {
	if (isExplorer()) {
		return document.selection.createRange().text;
	}
	else {
		var node = getSelectedNode();
		if (node && node.value && node.selectionStart != undefined && node.selectionEnd != undefined)
			return node.value.substring(node.selectionStart, node.selectionEnd);
	}
	return "";
}

/* </pre> */