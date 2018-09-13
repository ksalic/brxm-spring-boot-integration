package org.onehippo;

import javax.servlet.http.Cookie;

import com.bloomreach.pagemodel.api.model.PageModel;

import org.junit.Ignore;
import org.junit.Test;
import org.onehippo.connect.proxy.FlatComponentModelMap;
import org.onehippo.connect.proxy.PageModelServiceClient;

import static junit.framework.TestCase.assertNotNull;

public class FlatModelTest {

    @Ignore
    @Test
    public void testFlatModel() {
        PageModelServiceClient client = new PageModelServiceClient();
        Cookie cookie = new Cookie("JSESSIONID", "B6C2AA36FF324377927C66403396113E");
        Cookie[] cookies = new Cookie[]{cookie};
        PageModel pageModelForPreview = client.getPageModelForPreview("http://localhost:8080/site/_cmsinternal/resourceapi", cookies, "");
        FlatComponentModelMap listModel = client.convertFromPageModel(pageModelForPreview);
        assertNotNull(listModel);
    }
}
