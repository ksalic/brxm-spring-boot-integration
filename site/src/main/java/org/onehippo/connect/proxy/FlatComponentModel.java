package org.onehippo.connect.proxy;

import com.bloomreach.pagemodel.api.model.ComponentModel;

public class FlatComponentModel {

    private String id;
    private String commentStart;
    private String commentEnd;

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getCommentStart() {
        return commentStart;
    }

    public void setCommentStart(final String commentStart) {
        this.commentStart = commentStart;
    }

    public String getCommentEnd() {
        return commentEnd;
    }

    public void setCommentEnd(final String commentEnd) {
        this.commentEnd = commentEnd;
    }


}
