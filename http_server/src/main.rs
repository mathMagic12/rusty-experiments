fn main() {
    let get = Method::GET;
    let put = Method::PUT;
    let delete = Method::DELETE;
    let post = Method::POST; 


    let server=Server::new("127.0.0.1:8080".to_string());
    server.run();
}

struct Server{
    addr: String,
}

impl Server {
    fn new(addr: String) -> Self {
        Self {
            addr
        }

    }
    fn run(self){
        println!("Listening: {}",self.addr);
    }
}

struct Request{
    path: String,
    query_string: String,
    method: Method,
}

enum Method{
    GET,
    DELETE,
    POST,
    PUT,
    HEAD,
    CONNECT,
    OPTIONS,
    TRACE,
    PATCH,
}