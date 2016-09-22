(function(window, undefined) {
  var dictionary = {
    "ade49ca6-58fa-4f7e-a98d-9295322b93d8": "register",
    "3b74d585-91c2-448a-9745-609eff491ae2": "profile",
    "81e6dd9c-4208-4553-831d-8467a11a0cce": "about",
    "908a23c2-ab88-4fea-b327-4c41ebf74a66": "home2",
    "4d9db0eb-448f-4361-a39d-09ccbb5b7451": "control",
    "6dd298dd-ddbd-4fa7-b396-02e472be0087": "contact2",
    "94553073-d370-47fe-a12d-c89202fed817": "friends3",
    "1cc9cbc5-b36e-46b1-92c0-da134919838e": "friends2",
    "d9e9b72e-056b-4e0e-abc9-99151c0a4cac": "login",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "19c903e5-4dbb-4c7c-9301-ec2c865a5fc8": "edit",
    "85e42bed-034e-4731-95a1-6d30e41a4d51": "friends",
    "5ac2a56d-4676-44c6-83d0-3d5d5e2df494": "contact",
    "2578a5c5-666a-4ac3-b713-bbac26c6736b": "profile2",
    "f8a8c2e6-0439-490f-9e69-4c6830258acd": "home",
    "a381f956-85e2-487f-92cc-b872bfa96f84": "cover",
    "eb184f3c-0935-4b1f-8b18-e3601590aa11": "splash",
    "087d7788-573d-40b5-b2be-10a99ee5e40f": "control3",
    "b4ccecd4-2f06-4240-8f18-130c3bdc3e74": "control2",
    "1048bebf-6969-452e-bfe1-a6327778e388": "about2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);